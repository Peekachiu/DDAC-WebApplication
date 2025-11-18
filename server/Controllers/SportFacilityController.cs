using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SportFacilityController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SportFacilityController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /api/sportfacility/user/5
        // Gets all bookings for a specific user
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<SportFacility>>> GetBookingsForUser(int userId)
        {
            return await _context.SportFacilities
                .Where(b => b.UserID == userId)
                .OrderByDescending(b => b.BookingDate)
                .ToListAsync();
        }

        // POST: /api/sportfacility
        // Creates a new booking
        [HttpPost]
        public async Task<ActionResult<SportFacility>> PostBooking(SportFacility booking)
        {
            // You should add validation logic here
            
            _context.SportFacilities.Add(booking);
            await _context.SaveChangesAsync();

            // Returns a 201 Created status with the new booking
            return CreatedAtAction(nameof(GetBookingsForUser), new { userId = booking.UserID }, booking);
        }
    }
}