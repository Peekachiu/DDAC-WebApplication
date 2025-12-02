using Microsoft.AspNetCore.Mvc;
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
        
        public string Month { get; set; } = string.Empty;
        public decimal Amount { get; set; } // [CHANGED] decimal
        public DateTime DueDate { get; set; }
    }

    public class PayInvoiceRequest
    {
        public string PaymentMethod { get; set; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class FinancialController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public FinancialController(ResidentProDbContext context)
        {
            _context = context;
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
                IssueDate = DateTime.Now,
                DueDate = request.DueDate,
                PaymentDate = null,
                Status = 0,
                Method = "",
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
                // Mock payment logic (Stripe integration skipped for brevity as per previous code)
                string prettyMethod = request.PaymentMethod; // Simplified for now

                var malaysiaTime = DateTime.UtcNow.AddHours(8);

                fee.Method = prettyMethod;
                fee.Status = 1;
                fee.PaymentDate = malaysiaTime;
                fee.PaymentTime = malaysiaTime.TimeOfDay;

                await _context.SaveChangesAsync();

                return Ok(new { message = "Payment recorded successfully", method = prettyMethod });
            }
            catch (Exception ex)
            {
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