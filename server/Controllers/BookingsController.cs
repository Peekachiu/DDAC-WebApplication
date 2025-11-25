using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System.Globalization;

namespace server.Controllers
{
    // DTOs
    public class FacilityDto
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int Capacity { get; set; }
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
        public string Purpose { get; set; } = string.Empty; // Matches 'Purpose' in DB
    }

    public class BlockDateRequest
{
    public string FacilityName { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public string Reason { get; set; } = string.Empty;
}
    public class CreateSportBookingRequest
    {
        public string SportName { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public string StartTime { get; set; } = string.Empty;
        public int Duration { get; set; }
        public int UserId { get; set; }
        public int Guests { get; set; } // [ADDED] Allow guests for sports
    }

    public class CreateEventBookingRequest
    {
        public string HallName { get; set; } = string.Empty;
        public string EventType { get; set; } = string.Empty; // This will go to 'Purpose'
        public DateTime Date { get; set; }
        public string StartTime { get; set; } = string.Empty; 
        public string EndTime { get; set; } = string.Empty;
        public int Guests { get; set; }
        public string Description { get; set; } = string.Empty;
        public int UserId { get; set; }
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

        // --- FACILITY MANAGEMENT ---
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

        // --- BOOKING MANAGEMENT ---

        [HttpPost("sport")]
        public async Task<IActionResult> CreateSportBooking(CreateSportBookingRequest request)
        {
            // [CHANGED] Pass request.Guests instead of 0
            // [CHANGED] Purpose defaults to "Sport Booking"
            return await CreateBookingInternal(
                request.SportName, "sport", request.Date, request.StartTime, 
                TimeSpan.Parse(request.StartTime).Add(TimeSpan.FromHours(request.Duration)).ToString(@"hh\:mm"), 
                request.UserId, request.Guests, "Sport Booking"); 
        }

        [HttpPost("event")]
        public async Task<IActionResult> CreateEventBooking(CreateEventBookingRequest request)
        {
            // [CHANGED] Map 'EventType' to 'Purpose' so it shows up in the Purpose column
            string bookingPurpose = string.IsNullOrEmpty(request.EventType) ? "Event" : request.EventType;

            return await CreateBookingInternal(
                request.HallName, "event", request.Date, request.StartTime, 
                request.EndTime, request.UserId, request.Guests, bookingPurpose);
        }

        [HttpGet("blocked-dates")]
        public async Task<ActionResult<IEnumerable<BlockedDate>>> GetBlockedDates()
        {
            return await _context.BlockedDates.ToListAsync();
        }

        [HttpPost("block-date")]
        public async Task<IActionResult> BlockDate(BlockDateRequest request)
        {
            var exists = await _context.BlockedDates
                .AnyAsync(b => b.FacilityName == request.FacilityName && b.Date.Date == request.Date.Date);

            if (exists) return BadRequest("Date already blocked for this facility.");

            var blockedDate = new BlockedDate
            {
                FacilityName = request.FacilityName,
                Date = request.Date,
                Reason = request.Reason
            };

            _context.BlockedDates.Add(blockedDate);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Date blocked successfully" });
        }

        [HttpDelete("unblock-date/{id}")]
        public async Task<IActionResult> UnblockDate(int id)
        {
            var blocked = await _context.BlockedDates.FindAsync(id);
            if (blocked == null) return NotFound();

            _context.BlockedDates.Remove(blocked);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Date unblocked" });
        }

        private async Task<IActionResult> CreateBookingInternal(
            string facilityName, string type, DateTime date, string startTimeStr, string endTimeStr, 
            int userId, int guests, string purpose)
        {
            var facility = await _context.Facilities
                .FirstOrDefaultAsync(f => f.Name == facilityName && f.Type == type);

            if (facility == null) return BadRequest("Facility not found.");
            if (facility.Status == "maintenance") return BadRequest("This facility is under maintenance.");

            var isBlocked = await _context.BlockedDates
                .AnyAsync(b => b.FacilityName == facilityName && b.Date.Date == date.Date);

            if (isBlocked) return BadRequest("This date is unavailable due to maintenance or facility blocking.");

            if (!TimeSpan.TryParse(startTimeStr, out var start) || !TimeSpan.TryParse(endTimeStr, out var end))
                return BadRequest("Invalid time format.");

            if (end <= start) return BadRequest("End time must be after start time.");

            var conflict = await _context.Bookings
                .AnyAsync(b => b.FacilityID == facility.Id
                            && b.BookingDate.Date == date.Date
                            && b.Status != 2 && b.Status != 3 
                            && ((b.StartTime < end && b.EndTime > start)));

            if (conflict) return BadRequest("The selected time slot is already booked.");

            var booking = new Booking
            {
                FacilityID = facility.Id,
                UserID = userId,
                BookingDate = date,
                StartTime = start,
                EndTime = end,
                Guests = guests,   // [FIXED] Now correctly saves guests
                Purpose = purpose, // [FIXED] Now correctly saves EventType or Sport Booking
                Status = 0 
            };

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Booking successful" });
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<BookingDto>>> GetAllBookings()
        {
            var bookings = await _context.Bookings
                .Include(b => b.Facility)
                .Include(b => b.User).ThenInclude(u => u.Property)
                .OrderByDescending(b => b.BookingDate)
                .ToListAsync();

            var dtos = bookings.Select(b => new BookingDto
            {
                Id = b.BookingID.ToString(),
                FacilityName = b.Facility?.Name ?? "Unknown",
                FacilityType = b.Facility?.Type ?? "Unknown",
                ResidentName = b.User != null ? $"{b.User.FirstName} {b.User.LastName}" : "Unknown",
                Unit = b.User?.Property != null ? $"{b.User.Property.Block}-{b.User.Property.Floor}-{b.User.Property.Unit}" : "N/A",
                Date = b.BookingDate.ToString("yyyy-MM-dd"),
                StartTime = DateTime.Today.Add(b.StartTime).ToString("h:mm tt"),
                EndTime = DateTime.Today.Add(b.EndTime).ToString("h:mm tt"),
                Guests = b.Guests,      // [FIXED] Now included in DTO
                Status = MapStatus(b.Status),
                Purpose = b.Purpose     // [FIXED] Now included in DTO
            });

            return Ok(dtos);
        }

        [HttpPut("update-status/{id}")]
        public async Task<IActionResult> UpdateBookingStatus(string id, [FromBody] UpdateStatusRequest request)
        {
            var numericIdString = new string(id.Where(char.IsDigit).ToArray());
            if (!int.TryParse(numericIdString, out int dbId)) return BadRequest("Invalid ID");

            var booking = await _context.Bookings.FindAsync(dbId);
            if (booking == null) return NotFound();

            booking.Status = request.Status switch {
                "approved" => 1,
                "rejected" => 2,
                "cancelled" => 3,
                _ => 0
            };

            await _context.SaveChangesAsync();
            return Ok(new { message = "Status updated" });
        }

        private string MapStatus(int status) => status switch { 
            0 => "pending", 1 => "approved", 2 => "rejected", 3 => "cancelled", _ => "unknown" 
        };
    }
}