using Microsoft.AspNetCore.Authorization; // [ADDED]
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using Stripe;

namespace server.Controllers
{
    // DTOs
    public class InvoiceDto
    {
        public int Id { get; set; }
        public string ResidentName { get; set; } = string.Empty;
        public string Block { get; set; } = string.Empty; // [ADDED]
        public string Floor { get; set; } = string.Empty; // [ADDED]
        public string Unit { get; set; } = string.Empty;
        public string Month { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty; // [ADDED]
        public decimal Amount { get; set; } // [CHANGED] decimal
        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }
        public string Status { get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = string.Empty;
        public DateTime? PaidDate { get; set; }
    }

    public class CreateInvoiceRequest
    {
        // [CHANGED] Separate fields for property identification
        public string Block { get; set; } = string.Empty;
        public string Floor { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        
        // This 'Month' field might be redundant if we use Description, but keeping for compatibility
        public string Month { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty; // [ADDED]
        public decimal Amount { get; set; } // [CHANGED] decimal
        public DateTime? IssueDate { get; set; } // [ADDED] Optional custom issue date
        public DateTime DueDate { get; set; }
    }

    public class PayInvoiceRequest
    {
        public string PaymentMethod { get; set; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    [Authorize] // [ADDED]
    public class FinancialController : ControllerBase
    {
        private readonly ResidentProDbContext _context;
        private readonly IConfiguration _configuration; // [ADDED]

        public FinancialController(ResidentProDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"]; // [ADDED] Initialize Stripe
        }

        // GET: api/Financial
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InvoiceDto>>> GetInvoices()
        {
            var fees = await _context.ManagementFees
                .Include(m => m.Property)
                .ToListAsync();

            var users = await _context.Users.ToListAsync();

            var invoiceDtos = fees.Select(f =>
            {
                var resident = users.FirstOrDefault(u => u.PropertyID == f.PropertyID);

                string statusStr = "pending";
                if (f.Status == 1) statusStr = "paid";
                else if (f.DueDate < DateTime.Now) statusStr = "overdue";

                return new InvoiceDto
                {
                    Id = f.PaymentID,
                    ResidentName = resident != null ? $"{resident.FirstName} {resident.LastName}" : "Unknown",
                    // [CHANGED] Map separate fields
                    Block = f.Property?.Block ?? "N/A",
                    Floor = f.Property?.Floor ?? "N/A",
                    Unit = f.Property?.Unit ?? "N/A",
                    Month = f.IssueDate.ToString("MMMM yyyy"),
                    Description = f.Description, // [ADDED]
                    Amount = f.Amount,
                    IssueDate = f.IssueDate,
                    DueDate = f.DueDate,
                    Status = statusStr,
                    PaymentMethod = f.Method,
                    PaidDate = f.PaymentDate
                };
            })
            .OrderByDescending(x => x.IssueDate)
            .ToList();

            return Ok(invoiceDtos);
        }

        // POST: api/Financial
        [HttpPost]
        public async Task<ActionResult> GenerateInvoice(CreateInvoiceRequest request)
        {
            // [CHANGED] Strict matching for Block, Floor, Unit
            var targetProp = await _context.Properties.FirstOrDefaultAsync(p =>
                p.Block == request.Block &&
                p.Floor == request.Floor &&
                p.Unit == request.Unit
            );

            if (targetProp == null)
            {
                return BadRequest(new { message = $"Property not found. Verify Block '{request.Block}', Floor '{request.Floor}', Unit '{request.Unit}'." });
            }

            var newFee = new ManagementFee
            {
                PropertyID = targetProp.PropertyID,
                Amount = request.Amount,
                IssueDate = request.IssueDate ?? DateTime.Now, // [CHANGED] Use custom issue date or default to Now
                DueDate = request.DueDate,
                PaymentDate = null,
                Status = 0,
                Method = "",
                Description = request.Description, // [ADDED]
                PaymentTime = TimeSpan.Zero
            };

            _context.ManagementFees.Add(newFee);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Invoice generated successfully", id = newFee.PaymentID });
        }

        // PUT: api/Financial/pay/{id}
        [HttpPut("pay/{id}")]
        public async Task<IActionResult> PayInvoice(int id, PayInvoiceRequest request)
        {
            var fee = await _context.ManagementFees.FindAsync(id);
            if (fee == null) return NotFound(new { message = "Invoice not found" });

            try
            {
                // [CHANGED] Resolve Stripe Payment Method ID to readable string
                string methodId = request.PaymentMethod.Trim();
                string readableMethod = "Unknown";

                if (methodId.StartsWith("pm_"))
                {
                    var paymentMethodService = new PaymentMethodService();
                    var paymentMethod = await paymentMethodService.GetAsync(methodId);

                    if (paymentMethod != null)
                    {
                        switch (paymentMethod.Type)
                        {
                            case "card":
                                readableMethod = "card"; // Simplified as per request
                                break;
                            case "grabpay":
                                readableMethod = "grabpay";
                                break;
                            case "fpx":
                                readableMethod = $"fpx_{paymentMethod.Fpx?.Bank ?? "unknown"}";
                                break;
                            default:
                                readableMethod = paymentMethod.Type;
                                break;
                        }
                    }
                }
                else
                {
                    // Fallback if not a Stripe ID (e.g. legacy data or manual entry)
                    readableMethod = methodId; 
                }

                fee.Method = readableMethod;
                fee.Status = 1;
                fee.PaymentDate = DateTime.UtcNow;
                fee.PaymentTime = DateTime.UtcNow.TimeOfDay;

                await _context.SaveChangesAsync();

                return Ok(new { message = "Payment recorded successfully", method = readableMethod });
            }
            catch (Exception ex)
            {
                // Log exception in a real app
                return BadRequest(new { message = ex.Message });
            }
        }

        // [ADDED] DELETE: api/Financial/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice(int id)
        {
            var fee = await _context.ManagementFees.FindAsync(id);
            if (fee == null) return NotFound(new { message = "Invoice not found" });

            _context.ManagementFees.Remove(fee);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}