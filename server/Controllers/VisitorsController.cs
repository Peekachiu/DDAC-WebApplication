using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    public class CreateVisitorRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Purpose { get; set; } = string.Empty;
        public int UserId { get; set; } // The resident being visited
    }

    public class VisitorDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Purpose { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string CheckIn { get; set; } = string.Empty;
        public string CheckOut { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty; // "checked-in" or "checked-out"
    }

    [Route("api/[controller]")]
    [ApiController]
    public class VisitorsController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public VisitorsController(ResidentProDbContext context)
        {
            _context = context;
        }

        // GET: api/Visitors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VisitorDto>>> GetVisitors()
        {
            // Added '!' to suppress CS8602 warning in Includes
            var visitors = await _context.Visitors
                .Include(v => v.User!)
                .ThenInclude(u => u.Property!)
                .OrderByDescending(v => v.VisitDate)
                .ThenByDescending(v => v.VisitTime)
                .ToListAsync();

            return Ok(visitors.Select(MapToDto));
        }

        // GET: api/Visitors/my-visitors/{userId}
        [HttpGet("my-visitors/{userId}")]
        public async Task<ActionResult<IEnumerable<VisitorDto>>> GetMyVisitors(int userId)
        {
            try
            {
                // Added '!' to suppress CS8602 warning in Includes
                var visitors = await _context.Visitors
                    .Where(v => v.UserID == userId)
                    .Include(v => v.User!)
                    .ThenInclude(u => u.Property!)
                    .OrderByDescending(v => v.VisitDate)
                    .ToListAsync();

                return Ok(visitors.Select(MapToDto));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Internal Server Error", error = ex.Message, stackTrace = ex.StackTrace });
            }
        }

        // POST: api/Visitors
        [HttpPost]
        public async Task<IActionResult> RegisterVisitor([FromBody] CreateVisitorRequest request)
        {
            var now = DateTime.UtcNow;

            var visitor = new Visitor
            {
                VisitorName = request.Name,
                VisitorContactNumber = request.Phone,
                Purpose = request.Purpose,
                UserID = request.UserId,
                VisitDate = now.Date,
                VisitTime = now.TimeOfDay,
                Status = 0, // 0 = Checked In
                CheckOutTime = null
            };

            _context.Visitors.Add(visitor);
            await _context.SaveChangesAsync();

            // Reload to include relationships for DTO
            await _context.Entry(visitor).Reference(v => v.User).Query().Include(u => u.Property).LoadAsync();

            return Ok(MapToDto(visitor));
        }

        // PUT: api/Visitors/{id}/checkout
        [HttpPut("{id}/checkout")]
        public async Task<IActionResult> CheckOutVisitor(int id)
        {
            var visitor = await _context.Visitors.FindAsync(id);
            if (visitor == null) return NotFound();

            visitor.Status = 1; // Checked Out
            visitor.CheckOutTime = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return Ok(new { message = "Visitor checked out successfully" });
        }

        // Helper to format data for frontend
        private static VisitorDto MapToDto(Visitor v)
        {
            var checkInDateTime = v.VisitDate.Add(v.VisitTime);
            
            string unitStr = "N/A";
            if (v.User?.Property != null)
            {
                unitStr = $"{v.User.Property.Block}-{v.User.Property.Floor}-{v.User.Property.Unit}";
            }

            return new VisitorDto
            {
                Id = v.VisitorID,
                Name = v.VisitorName,
                Phone = v.VisitorContactNumber,
                Purpose = v.Purpose,
                Unit = unitStr,
                CheckIn = DateTime.SpecifyKind(checkInDateTime, DateTimeKind.Utc).ToString("o"),
                // Fixed CS8601: Handle potential null from ToString()
                CheckOut = v.CheckOutTime.HasValue ? DateTime.SpecifyKind(v.CheckOutTime.Value, DateTimeKind.Utc).ToString("o") : string.Empty,
                Status = v.Status == 0 ? "checked-in" : "checked-out"
            };
        }
    }
}