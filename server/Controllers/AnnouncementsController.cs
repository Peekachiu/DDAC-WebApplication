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
        public async Task<ActionResult<IEnumerable<object>>> GetResidentAnnouncements([FromQuery] int userId)
        {
            if (userId <= 0) return BadRequest("UserId is required");

            var announcements = await _context.Announcements
                .Where(a => a.Status == "sent")
                .OrderByDescending(a => a.SentDate)
                .ToListAsync();

            var userAnnouncements = await _context.UserAnnouncements
                .Where(ua => ua.UserID == userId)
                .ToListAsync();

            var result = announcements
                .GroupJoin(
                    userAnnouncements,
                    a => a.AnnouncementID,
                    ua => ua.AnnouncementID,
                    (a, uaList) => new { Announcement = a, UserStatus = uaList.FirstOrDefault() }
                )
                .Where(x => x.UserStatus == null || !x.UserStatus.IsDeleted)
                .Select(x => new
                {
                    x.Announcement.AnnouncementID,
                    x.Announcement.Title,
                    x.Announcement.Message,
                    x.Announcement.Type,
                    x.Announcement.SentDate,
                    x.Announcement.ScheduledDate,
                    Read = x.UserStatus != null && x.UserStatus.IsRead
                })
                .ToList();

            return Ok(result);
        }

        // Helper to get Malaysia Time (UTC+8)
        private DateTime GetMalaysiaTime()
        {
            return DateTime.UtcNow.AddHours(8); // Explicitly Malaysia Time
        }

        // POST: api/Announcements
        [HttpPost]
        public async Task<ActionResult<Announcement>> CreateAnnouncement(Announcement announcement)
        {
            // Auto-determine status based on date
            var now = GetMalaysiaTime();
            if (announcement.ScheduledDate <= now)
            {
                announcement.Status = "sent";
                announcement.SentDate = now;
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
            announcement.SentDate = GetMalaysiaTime();

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

        // POST: api/Announcements/mark-read
        [HttpPost("mark-read")]
        public async Task<IActionResult> MarkAsRead([FromBody] UserAnnouncementStatusRequest request)
        {
            var userAnnouncement = await GetOrCreateUserAnnouncement(request.UserId, request.AnnouncementId);
            userAnnouncement.IsRead = true;
            await _context.SaveChangesAsync();
            return Ok();
        }

        // POST: api/Announcements/mark-unread
        [HttpPost("mark-unread")]
        public async Task<IActionResult> MarkAsUnread([FromBody] UserAnnouncementStatusRequest request)
        {
            var userAnnouncement = await GetOrCreateUserAnnouncement(request.UserId, request.AnnouncementId);
            userAnnouncement.IsRead = false;
            await _context.SaveChangesAsync();
            return Ok();
        }

        // POST: api/Announcements/dismiss
        [HttpPost("dismiss")]
        public async Task<IActionResult> Dismiss([FromBody] UserAnnouncementStatusRequest request)
        {
            var userAnnouncement = await GetOrCreateUserAnnouncement(request.UserId, request.AnnouncementId);
            userAnnouncement.IsDeleted = true;
            await _context.SaveChangesAsync();
            return Ok();
        }

        private async Task<UserAnnouncement> GetOrCreateUserAnnouncement(int userId, int announcementId)
        {
            var userAnnouncement = await _context.UserAnnouncements
                .FirstOrDefaultAsync(ua => ua.UserID == userId && ua.AnnouncementID == announcementId);

            if (userAnnouncement == null)
            {
                userAnnouncement = new UserAnnouncement
                {
                    UserID = userId,
                    AnnouncementID = announcementId
                };
                _context.UserAnnouncements.Add(userAnnouncement);
            }

            return userAnnouncement;
        }
    }

    public class UserAnnouncementStatusRequest
    {
        public int UserId { get; set; }
        public int AnnouncementId { get; set; }
    }
}
