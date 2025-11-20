using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using BCrypt.Net; // Import BCrypt

namespace server.Controllers
{
    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public LoginController(ResidentProDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest(new { message = "Email and password are required." });
            }

            // 1. Find Login record by Email
            var loginRecord = await _context.Logins
                .AsNoTracking()
                .FirstOrDefaultAsync(l => l.Email == request.Email);

            // 2. Verify Password (Hash Check)
            // We use BCrypt.Verify(plainText, hashFromDb)
            if (loginRecord == null || !BCrypt.Net.BCrypt.Verify(request.Password, loginRecord.Password))
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            // 3. Fetch User details
            var user = await _context.Users
                .Include(u => u.Property)
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.UserID == loginRecord.UserID);

            if (user == null)
            {
                return Unauthorized(new { message = "User data not found." });
            }

            // 4. Map Role
            string roleString = user.Role == 0 ? "Admin" : "Resident";
            string unitString = user.Property != null 
                ? $"{user.Property.Block}-{user.Property.Floor}-{user.Property.Unit}" 
                : "No Unit Assigned";

            var userDto = new UserDto
            {
                Id = user.UserID,
                Name = $"{user.FirstName} {user.LastName}",
                Email = user.Email,
                Unit = unitString, 
                Role = roleString
            };

            return Ok(userDto);
        }
    }
}