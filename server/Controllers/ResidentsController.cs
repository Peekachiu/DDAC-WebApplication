using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    // DTOs for data transfer to keep things clean
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
        public string UnitNumber { get; set; } = string.Empty; // Matches 'Unit' column in Property
        public string Password { get; set; } = string.Empty;
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
                .Where(u => u.Role == 1) // Filter for Residents only
                .Include(u => u.Property)
                .ToListAsync();

            var residentDtos = residents.Select(u => new ResidentDto
            {
                Id = u.UserID,
                Name = $"{u.FirstName} {u.LastName}",
                Email = u.Email,
                // If property exists, format it like "Block-Floor-Unit", else show "Unassigned"
                UnitNumber = u.Property != null ? $"{u.Property.Block}-{u.Property.Floor}-{u.Property.Unit}" : "Unassigned",
                Role = "Resident"
            }).ToList();

            return Ok(residentDtos);
        }

        // POST: api/Residents
        [HttpPost]
        public async Task<ActionResult<ResidentDto>> CreateResident(CreateResidentRequest request)
        {
            // 1. Find Property by Unit Number (Simple lookup)
            // In a real app, you might want a dropdown of available Property IDs instead
            var property = await _context.Properties
                .FirstOrDefaultAsync(p => p.Unit == request.UnitNumber);

            if (property == null)
            {
                return BadRequest(new { message = "Unit Number not found in Property database." });
            }

            // 2. Create User
            // Splitting Name into First/Last for simplicity
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
                IdentityNumber = "N/A", // Default values for now
                ContactNumber = "N/A"
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync(); // Save to get the UserID

            // 3. Create Login
            var newLogin = new Login
            {
                Email = request.Email,
                Password = request.Password, // Note: Should hash this in production
                UserID = newUser.UserID
            };

            _context.Logins.Add(newLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetResidents), new { id = newUser.UserID }, request);
        }

        // PUT: api/Residents/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateResident(int id, UpdateResidentRequest request)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            // Update Basic Info
            var names = request.Name.Split(' ');
            user.FirstName = names[0];
            user.LastName = names.Length > 1 ? names[1] : "";
            user.Email = request.Email;

            // Update Property if changed
            if (!string.IsNullOrEmpty(request.UnitNumber))
            {
                var property = await _context.Properties.FirstOrDefaultAsync(p => p.Unit == request.UnitNumber);
                if (property != null)
                {
                    user.PropertyID = property.PropertyID;
                }
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Users.Any(e => e.UserID == id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // DELETE: api/Residents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResident(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            // Manually remove Login first (if Cascade delete isn't set up in DB)
            var login = await _context.Logins.FirstOrDefaultAsync(l => l.UserID == id);
            if (login != null) _context.Logins.Remove(login);

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}