using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System.Globalization;

namespace server.Controllers
{
    // DTOs matching your Frontend state
    public class FacilityDto
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public decimal HourlyRate { get; set; }
        public string Status { get; set; } = string.Empty;
    }

    public class BookingDto
    {
        public string Id { get; set; } = string.Empty;
        public string FacilityName { get; set; } = string.Empty;
        public string FacilityType { get; set; } = string.Empty;
        public string ResidentName { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string StartTime { get; set; } = string.Empty;
        public string EndTime { get; set; } = string.Empty;
        public int Guests { get; set; }
        public string Status { get; set; } = string.Empty;
        public string? Purpose { get; set; }
        public string? Notes { get; set; }
    }

    public class UpdateStatusRequest { public string Status { get; set; } = string.Empty; }

    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public BookingsController(ResidentProDbContext context)
        {
            _context = context;
        }

        // --- FACILITY MANAGEMENT ENDPOINTS ---

        [HttpGet("facilities")]
        public async Task<ActionResult<IEnumerable<FacilityDto>>> GetFacilities()
        {
            var facilities = await _context.Facilities.ToListAsync();
            return Ok(facilities.Select(f => new FacilityDto
            {
                Id = f.Id.ToString(),
                Name = f.Name,
                Type = f.Type,
                Description = f.Description,
                Capacity = f.Capacity,
                HourlyRate = f.HourlyRate,
                Status = f.Status
            }));
        }

        [HttpPost("facilities")]
        public async Task<IActionResult> CreateFacility(FacilityDto dto)
        {
            var facility = new Facility
            {
                Name = dto.Name,
                Type = dto.Type,
                Description = dto.Description,
                Capacity = dto.Capacity,
                HourlyRate = dto.HourlyRate,
                Status = "available"
            };
            _context.Facilities.Add(facility);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Facility created" });
        }

        [HttpPut("facilities/{id}")]
        public async Task<IActionResult> UpdateFacility(int id, FacilityDto dto)
        {
            var facility = await _context.Facilities.FindAsync(id);
            if (facility == null) return NotFound();

            facility.Name = dto.Name;
            facility.Type = dto.Type;
            facility.Description = dto.Description;
            facility.Capacity = dto.Capacity;
            facility.HourlyRate = dto.HourlyRate;
            // Status updated via toggle endpoint usually, but can be here too
            
            await _context.SaveChangesAsync();
            return Ok(new { message = "Facility updated" });
        }

        [HttpDelete("facilities/{id}")]
        public async Task<IActionResult> DeleteFacility(int id)
        {
            var facility = await _context.Facilities.FindAsync(id);
            if (facility == null) return NotFound();
            _context.Facilities.Remove(facility);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Facility deleted" });
        }

        [HttpPut("facilities/toggle/{id}")]
        public async Task<IActionResult> ToggleFacilityStatus(int id)
        {
            var facility = await _context.Facilities.FindAsync(id);
            if (facility == null) return NotFound();

            facility.Status = facility.Status == "available" ? "maintenance" : "available";
            await _context.SaveChangesAsync();
            return Ok(new { message = "Status toggled" });
        }

        // --- BOOKING MANAGEMENT ENDPOINTS ---

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<BookingDto>>> GetAllBookings()
        {
            var bookings = new List<BookingDto>();

            // 1. Sports
            var sports = await _context.SportFacilities
                .Include(s => s.User).ThenInclude(u => u.Property)
                .ToListAsync();
            
            foreach (var s in sports)
            {
                var endTime = s.StartTime.Add(TimeSpan.FromHours(s.Duration));
                bookings.Add(new BookingDto
                {
                    Id = $"S-{s.SBookingID}",
                    FacilityName = s.SportName,
                    FacilityType = "sport",
                    ResidentName = $"{s.User.FirstName} {s.User.LastName}",
                    Unit = s.User.Property != null ? $"{s.User.Property.Block}-{s.User.Property.Floor}-{s.User.Property.Unit}" : "N/A",
                    Date = s.BookingDate.ToString("yyyy-MM-dd"),
                    StartTime = DateTime.Today.Add(s.StartTime).ToString("h:mm tt"),
                    EndTime = DateTime.Today.Add(endTime).ToString("h:mm tt"),
                    Guests = 0, 
                    Status = MapStatus(s.Status)
                });
            }

            // 2. Events
            var events = await _context.EventHalls
                .Include(e => e.Venue)
                .Include(e => e.User).ThenInclude(u => u.Property)
                .ToListAsync();

            foreach (var e in events)
            {
                var endTime = e.StartTime.Add(TimeSpan.FromHours(e.Duration));
                bookings.Add(new BookingDto
                {
                    Id = $"E-{e.HBookingID}",
                    FacilityName = e.Venue?.VenueDescription ?? "Unknown",
                    FacilityType = "event",
                    ResidentName = $"{e.User.FirstName} {e.User.LastName}",
                    Unit = e.User.Property != null ? $"{e.User.Property.Block}-{e.User.Property.Floor}-{e.User.Property.Unit}" : "N/A",
                    Date = e.BookingDate.ToString("yyyy-MM-dd"),
                    StartTime = DateTime.Today.Add(e.StartTime).ToString("h:mm tt"),
                    EndTime = DateTime.Today.Add(endTime).ToString("h:mm tt"),
                    Guests = 0,
                    Status = MapStatus(e.Status),
                    Purpose = "Event"
                });
            }

            return Ok(bookings.OrderByDescending(b => b.Date));
        }

        [HttpPut("update-status/{id}")]
        public async Task<IActionResult> UpdateBookingStatus(string id, [FromBody] UpdateStatusRequest request)
        {
            int statusCode = request.Status == "approved" ? 1 : 2; // 0=Pending, 1=Approved, 2=Rejected

            var parts = id.Split('-');
            var type = parts[0];
            var dbId = int.Parse(parts[1]);

            if (type == "S") {
                var item = await _context.SportFacilities.FindAsync(dbId);
                if (item != null) item.Status = statusCode;
            }
            else if (type == "E") {
                var item = await _context.EventHalls.FindAsync(dbId);
                if (item != null) item.Status = statusCode;
            }
            
            await _context.SaveChangesAsync();
            return Ok(new { message = "Status updated" });
        }

        private string MapStatus(int status) => status switch { 0 => "pending", 1 => "approved", _ => "rejected" };
    }
}