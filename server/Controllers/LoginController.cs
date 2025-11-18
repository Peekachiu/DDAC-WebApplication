using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.Controllers
{
    // Define the request data structure from the frontend
    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    // Define the successful response data structure for the frontend
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
            // IMPORTANT: In a production app, never store or check plain-text passwords. Use password hashing (e.g., BCrypt).

            // Query the Login table to check credentials
            var loginRecord = await _context.Logins
                .AsNoTracking()
                .FirstOrDefaultAsync(l => 
                    l.Email == request.Email && 
                    l.Password == request.Password); // Note: This is checking the plain password 'password123'

            if (loginRecord == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            // Fetch the corresponding User details
            var user = await _context.Users
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.UserID == loginRecord.UserID);

            if (user == null)
            {
                return Unauthorized(new { message = "User data missing." });
            }

            // Map the database role (int 0/1) to the role string expected by the frontend
            string roleString = user.Role == 0 ? "Admin" : "Resident";

            // Prepare the response object (UserDto)
            var userDto = new UserDto
            {
                Id = user.UserID,
                Name = $"{user.FirstName} {user.LastName}",
                Email = user.Email,
                // Placeholder for Unit. You need to join the Property table later to get the Unit details (e.g., "A-101")
                Unit = "PropertyID: " + user.PropertyID, 
                Role = roleString
            };

            return Ok(userDto);
        }
    }
}