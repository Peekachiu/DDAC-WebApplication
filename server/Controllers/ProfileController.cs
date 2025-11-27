using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using BCrypt.Net;

namespace server.Controllers
{
    public class ChangePasswordRequest
    {
        public int UserId { get; set; }
        public string OldPassword { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public ProfileController(ResidentProDbContext context)
        {
            _context = context;
        }

        [HttpPut("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
        {
            if (string.IsNullOrEmpty(request.NewPassword) || request.NewPassword.Length < 6)
            {
                return BadRequest(new { message = "New password must be at least 6 characters long." });
            }

            // 1. Find the Login record associated with this UserID
            var loginRecord = await _context.Logins
                .FirstOrDefaultAsync(l => l.UserID == request.UserId);

            if (loginRecord == null)
            {
                return NotFound(new { message = "User account not found." });
            }

            // 2. Verify the Old Password
            bool isOldPasswordValid = BCrypt.Net.BCrypt.Verify(request.OldPassword, loginRecord.Password);
            if (!isOldPasswordValid)
            {
                return BadRequest(new { message = "Incorrect old password." });
            }

            // 3. Hash the New Password and Update
            string newPasswordHash = BCrypt.Net.BCrypt.HashPassword(request.NewPassword);
            loginRecord.Password = newPasswordHash;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Password changed successfully." });
        }
    }
}