using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    // DTOs
    public class CreateReportRequest
    {
        public string Type { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Priority { get; set; } = "medium";
        public string? Photo { get; set; } 
        public int UserId { get; set; }
    }

    public class UpdateReportStatusRequest
    {
        public string Status { get; set; } = string.Empty;
        public string? AssignedTo { get; set; }
        public string? ResolutionNotes { get; set; }
    }

    public class ReportDto
    {
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ResidentName { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Priority { get; set; } = string.Empty;
        public string SubmittedDate { get; set; } = string.Empty;
        public string? AssignedTo { get; set; }
        public string? ResolvedDate { get; set; }
        public string? ResolutionNotes { get; set; }
        public string? Photo { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public ReportsController(ResidentProDbContext context)
        {
            _context = context;
        }

        // GET: api/Reports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReportDto>>> GetReports()
        {
            var reports = await _context.Reports
                .Include(r => r.User)
                .ThenInclude(u => u!.Property) // FIXED: Added '!' here
                .OrderByDescending(r => r.SubmittedDate)
                .ToListAsync();

            return Ok(reports.Select(MapToDto));
        }

        // GET: api/Reports/user/{userId}
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<ReportDto>>> GetUserReports(int userId)
        {
            var reports = await _context.Reports
                .Where(r => r.UserID == userId)
                .Include(r => r.User)
                .ThenInclude(u => u!.Property) // FIXED: Added '!' here
                .OrderByDescending(r => r.SubmittedDate)
                .ToListAsync();

            return Ok(reports.Select(MapToDto));
        }

        // POST: api/Reports
        [HttpPost]
        public async Task<IActionResult> CreateReport([FromBody] CreateReportRequest request)
        {
            var report = new Report
            {
                Type = request.Type,
                Category = request.Category,
                Subject = request.Subject,
                Description = request.Description,
                Priority = request.Priority,
                PhotoBase64 = request.Photo,
                UserID = request.UserId,
                ReportStatus = 0, // Pending
                SubmittedDate = DateTime.Now
            };

            _context.Reports.Add(report);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Report submitted successfully" });
        }

        // PUT: api/Reports/{id}/status
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateReportStatusRequest request)
        {
            var report = await _context.Reports.FindAsync(id);
            if (report == null) return NotFound();

            // Map string status to int
            report.ReportStatus = request.Status switch
            {
                "in-progress" => 1,
                "resolved" => 2,
                "rejected" => 3,
                _ => 0 // pending
            };

            if (!string.IsNullOrEmpty(request.AssignedTo)) report.AssignedTo = request.AssignedTo;
            if (!string.IsNullOrEmpty(request.ResolutionNotes)) report.ResolutionNotes = request.ResolutionNotes;
            
            if (request.Status == "resolved") report.ResolvedDate = DateTime.Now;

            await _context.SaveChangesAsync();
            return Ok(new { message = "Status updated" });
        }

        private static ReportDto MapToDto(Report r)
        {
            string statusStr = r.ReportStatus switch
            {
                1 => "in-progress",
                2 => "resolved",
                3 => "rejected",
                _ => "pending"
            };

            // FIXED: Cleaner null check logic for string interpolation
            string unitStr = "Unassigned";
            if (r.User?.Property != null)
            {
                unitStr = $"{r.User.Property.Block}-{r.User.Property.Floor}-{r.User.Property.Unit}";
            }

            string residentName = "Unknown";
            if (r.User != null)
            {
                residentName = $"{r.User.FirstName} {r.User.LastName}";
            }

            return new ReportDto
            {
                Id = r.ReportID,
                Type = r.Type,
                Category = r.Category,
                Subject = r.Subject,
                Description = r.Description,
                ResidentName = residentName,
                Unit = unitStr,
                Status = statusStr,
                Priority = r.Priority,
                SubmittedDate = r.SubmittedDate.ToString("yyyy-MM-dd"),
                AssignedTo = r.AssignedTo,
                ResolvedDate = r.ResolvedDate?.ToString("yyyy-MM-dd"),
                ResolutionNotes = r.ResolutionNotes,
                Photo = r.PhotoBase64
            };
        }
    }
}