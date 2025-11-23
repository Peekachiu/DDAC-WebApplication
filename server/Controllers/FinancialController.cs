using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using Stripe;

namespace server.Controllers
{
    // DTOs (Data Transfer Objects)
    public class InvoiceDto
    {
        public int Id { get; set; }
        public string ResidentName { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string Month { get; set; } = string.Empty;
        public int Amount { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }
        public string Status { get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = string.Empty;
        public DateTime? PaidDate { get; set; }
    }

    public class CreateInvoiceRequest
    {
        public string Unit { get; set; } = string.Empty;
        public string Month { get; set; } = string.Empty;
        public int Amount { get; set; }
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
                    Unit = f.Property != null ? $"{f.Property.Block}-{f.Property.Floor}-{f.Property.Unit}" : "Unknown",
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
            var property = await _context.Properties.AsNoTracking().ToListAsync();

            var targetProp = property.FirstOrDefault(p =>
                p.Unit == request.Unit ||
                $"{p.Block}-{p.Floor}-{p.Unit}" == request.Unit
            );

            if (targetProp == null)
            {
                return BadRequest(new { message = $"Unit '{request.Unit}' not found." });
            }

            var newFee = new ManagementFee
            {
                PropertyID = targetProp.PropertyID,
                Amount = request.Amount,
                IssueDate = DateTime.Now,
                DueDate = request.DueDate,
                PaymentDate = null,
                Status = 0,
                Method = "",   // Removed "N/A"
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
            if (fee == null)
                return NotFound(new { message = "Invoice not found" });

            try
            {
                // 1. Retrieve full PaymentMethod object from Stripe
                var stripeService = new PaymentMethodService();
                var pm = await stripeService.GetAsync(request.PaymentMethod);

                string prettyMethod = "Online Payment";

                if (pm.Type == "card")
                    prettyMethod = "Credit/Debit Card";

                else if (pm.Type == "fpx")
                    prettyMethod = $"FPX - {pm.Fpx.Bank?.ToUpper()}";

                else if (pm.Type == "grabpay")
                    prettyMethod = "GrabPay E-Wallet";


                // 2. Update DB
                var malaysiaTime = DateTime.UtcNow.AddHours(8);

                fee.Method = prettyMethod;
                fee.Status = 1;
                fee.PaymentDate = malaysiaTime;
                fee.PaymentTime = malaysiaTime.TimeOfDay;

                await _context.SaveChangesAsync();

                return Ok(new
                {
                    message = "Payment recorded successfully",
                    method = prettyMethod
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}