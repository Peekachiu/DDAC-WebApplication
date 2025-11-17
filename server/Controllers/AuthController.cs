using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using BCrypt.Net; // You still need this using statement

namespace server.Controllers
{
    // A DTO (Data Transfer Object) just to define the login request
    public class LoginRequest
    {
        // FIX 2: Initialize properties to satisfy CS8618
        public string Email { get; set; } = default!;
        public string Password { get; set; } = default!;
    }

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: /api/auth/login
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] LoginRequest loginRequest)
        {
            // 1. Find the login entry by email
            var loginInfo = await _context.Logins
                .FirstOrDefaultAsync(l => l.Email == loginRequest.Email);

            if (loginInfo == null)
            {
                // User not found
                return BadRequest("Invalid email or password.");
            }

            // 2. Verify the password
            bool isPasswordValid;
            try
            {
                // FIX 1: Use the full namespace BCrypt.Net.BCrypt.Verify
                isPasswordValid = BCrypt.Net.BCrypt.Verify(loginRequest.Password, loginInfo.Password);
            }
            catch
            {
                // This catches errors if the hash in the DB is invalid
                return BadRequest("Invalid password format.");
            }

            if (!isPasswordValid)
            {
                // Password incorrect
                return BadRequest("Invalid email or password.");
            }

            // 3. Login successful. Find the full user details to return.
            var user = await _context.Users
                .Include(u => u.Property) // Also include their property details
                .FirstOrDefaultAsync(u => u.UserID == loginInfo.UserID);

            if (user == null)
            {
                return NotFound("Login successful but user data not found.");
            }

            // Return the user object
            return Ok(user);
        }
    }
}