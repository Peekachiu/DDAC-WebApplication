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
        private readonly IConfiguration _configuration; // [ADDED]

        public LoginController(ResidentProDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
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

            // 5. Generate JWT Token [ADDED]
            var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
            var key = System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new Microsoft.IdentityModel.Tokens.SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new[]
                {
                    new System.Security.Claims.Claim("id", user.UserID.ToString()),
                    new System.Security.Claims.Claim("email", user.Email),
                    new System.Security.Claims.Claim("role", roleString)
                }),
                Expires = DateTime.UtcNow.AddHours(24)
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                SigningCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(key), Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            var userDto = new
            {
                Id = user.UserID,
                Name = $"{user.FirstName} {user.LastName}",
                Email = user.Email,
                Unit = unitString, 
                Role = roleString,
                Token = tokenString // [ADDED]
            };

            return Ok(userDto);
        }
    }
}