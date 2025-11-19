using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    // DTOs (Data Transfer Objects) for clean communication
    public class InvoiceDto
    {
        public int Id { get; set; }
        public string ResidentName { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string Month { get; set; } = string.Empty; 
        public int Amount { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }
        public string Status { get; set; } = string.Empty; // "pending", "paid", "overdue"
        public string? PaymentMethod { get; set; }
        public DateTime? PaidDate { get; set; }
    }

    public class CreateInvoiceRequest
    {
        public string Unit { get; set; } = string.Empty; // Accepts "A-10-05"
        public string Month { get; set; } = string.Empty; // Description/Month
        public int Amount { get; set; }
        public DateTime DueDate { get; set; }
    }

    public class PayInvoiceRequest
    {
        public string PaymentMethod { get; set; } = string.Empty;
        public DateTime PaymentDate { get; set; }
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

            var invoiceDtos = fees.Select(f => {
                var resident = users.FirstOrDefault(u => u.PropertyID == f.PropertyID);
                
                string statusStr = f.Status == 1 ? "paid" : (f.PaymentDate < DateTime.Now && f.Status == 0 ? "overdue" : "pending");

                return new InvoiceDto
                {
                    Id = f.PaymentID,
                    ResidentName = resident != null ? $"{resident.FirstName} {resident.LastName}" : "Unknown",
                    Unit = f.Property != null ? $"{f.Property.Block}-{f.Property.Floor}-{f.Property.Unit}" : "Unknown",
                    Month = f.PaymentDate.ToString("MMMM yyyy"), // Using Date as Month label
                    Amount = f.Amount,
                    IssueDate = f.PaymentDate, 
                    DueDate = f.PaymentDate.AddDays(14), // Default due 2 weeks later
                    Status = statusStr,
                    PaymentMethod = f.Method,
                    PaidDate = f.Status == 1 ? f.PaymentDate : null
                };
            }).OrderByDescending(x => x.IssueDate).ToList();

            return Ok(invoiceDtos);
        }

        // POST: api/Financial
        [HttpPost]
        public async Task<ActionResult> GenerateInvoice(CreateInvoiceRequest request)
        {
            // Try to match Unit string (e.g. "A-10-05" or just "05")
            var property = await _context.Properties
                .AsNoTracking()
                .ToListAsync();

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
                PaymentDate = DateTime.Now, 
                Status = 0, // 0 = Pending
                Method = "N/A",
                PaymentTime = DateTime.Now.TimeOfDay
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

            fee.Status = 1; // Mark as Paid
            fee.Method = request.PaymentMethod;
            fee.PaymentDate = request.PaymentDate; // Update to actual payment date

            await _context.SaveChangesAsync();
            return Ok(new { message = "Payment recorded successfully" });
        }
    }
}