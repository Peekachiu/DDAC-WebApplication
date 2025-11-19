using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public AnnouncementsController(ResidentProDbContext context)
        {
            _context = context;
        }

        // GET: api/Announcements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Announcement>>> GetAnnouncements()
        {
            return await _context.Announcements
                .OrderByDescending(a => a.ScheduledDate)
                .ToListAsync();
        }

        // GET: api/Announcements/resident
        // Filters only sent announcements for residents
        [HttpGet("resident")]
        public async Task<ActionResult<IEnumerable<Announcement>>> GetResidentAnnouncements()
        {
            return await _context.Announcements
                .Where(a => a.Status == "sent")
                .OrderByDescending(a => a.SentDate)
                .ToListAsync();
        }

        // POST: api/Announcements
        [HttpPost]
        public async Task<ActionResult<Announcement>> CreateAnnouncement(Announcement announcement)
        {
            // Auto-determine status based on date
            if (announcement.ScheduledDate <= DateTime.Now)
            {
                announcement.Status = "sent";
                announcement.SentDate = DateTime.Now;
            }
            else
            {
                announcement.Status = "scheduled";
            }

            _context.Announcements.Add(announcement);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAnnouncements), new { id = announcement.AnnouncementID }, announcement);
        }

        // PUT: api/Announcements/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnnouncement(int id, Announcement announcement)
        {
            if (id != announcement.AnnouncementID) return BadRequest();

            _context.Entry(announcement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Announcements.Any(e => e.AnnouncementID == id)) return NotFound();
                throw;
            }

            return NoContent();
        }

        // PUT: api/Announcements/5/send
        [HttpPut("{id}/send")]
        public async Task<IActionResult> SendNow(int id)
        {
            var announcement = await _context.Announcements.FindAsync(id);
            if (announcement == null) return NotFound();

            announcement.Status = "sent";
            announcement.SentDate = DateTime.Now;

            await _context.SaveChangesAsync();
            return Ok(new { message = "Announcement sent successfully" });
        }

        // DELETE: api/Announcements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnnouncement(int id)
        {
            var announcement = await _context.Announcements.FindAsync(id);
            if (announcement == null) return NotFound();

            _context.Announcements.Remove(announcement);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}