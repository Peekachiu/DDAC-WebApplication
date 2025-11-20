using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using BCrypt.Net; 

namespace server.Controllers
{
    // Data Transfer Objects (DTOs)
    public class ResidentDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string UnitNumber { get; set; } = string.Empty;
        public string Role { get; set; } = "Resident";
    }

    public class CreateResidentRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string UnitNumber { get; set; } = string.Empty;
        public string? Password { get; set; } 
    }

    public class UpdateResidentRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string UnitNumber { get; set; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ResidentsController : ControllerBase
    {
        private readonly ResidentProDbContext _context;

        public ResidentsController(ResidentProDbContext context)
        {
            _context = context;
        }

        // GET: api/Residents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResidentDto>>> GetResidents()
        {
            var residents = await _context.Users
                .Where(u => u.Role == 1) // Filter for Residents (Role 1)
                .Include(u => u.Property)
                .ToListAsync();

            var residentDtos = residents.Select(u => new ResidentDto
            {
                Id = u.UserID,
                Name = $"{u.FirstName} {u.LastName}",
                Email = u.Email,
                UnitNumber = u.Property != null ? $"{u.Property.Block}-{u.Property.Floor}-{u.Property.Unit}" : "Unassigned",
                Role = "Resident"
            }).ToList();

            return Ok(residentDtos);
        }

        // POST: api/Residents
        [HttpPost]
        public async Task<ActionResult<ResidentDto>> CreateResident(CreateResidentRequest request)
        {
            // 1. Check if the Unit exists
            var property = await _context.Properties
                .FirstOrDefaultAsync(p => p.Unit == request.UnitNumber);

            if (property == null)
            {
                return BadRequest(new { message = $"Unit Number '{request.UnitNumber}' not found. Please verify the unit exists." });
            }

            // 2. Check if Email is taken
            if (await _context.Logins.AnyAsync(l => l.Email == request.Email))
            {
                return BadRequest(new { message = "Email is already registered." });
            }

            // 3. Create User Entity
            var names = request.Name.Split(' ');
            var firstName = names[0];
            var lastName = names.Length > 1 ? names[1] : "";

            var newUser = new User
            {
                FirstName = firstName,
                LastName = lastName,
                Email = request.Email,
                Role = 1, // Resident
                PropertyID = property.PropertyID,
                IdentityNumber = "N/A",
                ContactNumber = "N/A"
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync(); // Generates the UserID

            // 4. Hash Password
            string plainPassword = string.IsNullOrEmpty(request.Password) ? "Resident123!" : request.Password;
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(plainPassword);

            var newLogin = new Login
            {
                Email = request.Email,
                Password = hashedPassword,
                UserID = newUser.UserID
            };

            _context.Logins.Add(newLogin);
            await _context.SaveChangesAsync();

            // 5. Prepare Response DTO (CRITICAL FIX: Include the new ID)
            var responseDto = new ResidentDto
            {
                Id = newUser.UserID, // valid ID from DB
                Name = request.Name,
                Email = request.Email,
                UnitNumber = request.UnitNumber,
                Role = "Resident"
            };

            return CreatedAtAction(nameof(GetResidents), new { id = newUser.UserID }, responseDto);
        }

        // PUT: api/Residents/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateResident(int id, UpdateResidentRequest request)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            var names = request.Name.Split(' ');
            user.FirstName = names[0];
            user.LastName = names.Length > 1 ? names[1] : "";
            user.Email = request.Email;

            if (!string.IsNullOrEmpty(request.UnitNumber))
            {
                var property = await _context.Properties.FirstOrDefaultAsync(p => p.Unit == request.UnitNumber);
                if (property != null)
                {
                    user.PropertyID = property.PropertyID;
                }
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Residents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResident(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            var login = await _context.Logins.FirstOrDefaultAsync(l => l.UserID == id);
            if (login != null) _context.Logins.Remove(login);

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}