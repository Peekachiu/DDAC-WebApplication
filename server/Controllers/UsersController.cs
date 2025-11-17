using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using BCrypt.Net;

namespace server.Controllers
{
    // DTO for creating a new user, property, and login all at once
    public class CreateUserRequest
    {
        // User fields
        public string FirstName { get; set; } = default!;
        public string LastName { get; set; } = default!;
        public string IdentityNumber { get; set; } = default!;
        public string ContactNumber { get; set; } = default!;
        public string Email { get; set; } = default!;
        public int Role { get; set; } 

        // Property fields
        public string Block { get; set; } = default!;
        public string Floor { get; set; } = default!;
        public string Unit { get; set; } = default!;

        // Login field
        public string Password { get; set; } = default!;
    }


    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users
                .Include(u => u.Property) 
                .ToListAsync();
        }

        // GET: /api/users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.Property)
                .FirstOrDefaultAsync(u => u.UserID == id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: /api/users
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(CreateUserRequest request)
        {
            // --- FIX 1: ADD THIS CHECK ---
            // Check if email already exists in either table
            if (await _context.Users.AnyAsync(u => u.Email == request.Email) || 
                await _context.Logins.AnyAsync(l => l.Email == request.Email))
            {
                return BadRequest("A user with this email already exists.");
            }
            // --- END OF FIX 1 ---

            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    // 1. Create the Property first
                    var newProperty = new Property
                    {
                        Block = request.Block,
                        Floor = request.Floor,
                        Unit = request.Unit
                    };
                    _context.Properties.Add(newProperty);
                    await _context.SaveChangesAsync(); 

                    // 2. Create the User
                    var newUser = new User
                    {
                        FirstName = request.FirstName,
                        LastName = request.LastName,
                        IdentityNumber = request.IdentityNumber,
                        ContactNumber = request.ContactNumber,
                        Email = request.Email,
                        Role = request.Role,
                        PropertyID = newProperty.PropertyID
                    };
                    _context.Users.Add(newUser);
                    await _context.SaveChangesAsync(); 

                    // 3. Create the Login
                    var newLogin = new Login
                    {
                        Email = request.Email,
                        Password = BCrypt.Net.BCrypt.HashPassword(request.Password),
                        UserID = newUser.UserID
                    };
                    _context.Logins.Add(newLogin);
                    await _context.SaveChangesAsync();

                    // 4. If all successful, commit the transaction
                    await transaction.CommitAsync();

                    return CreatedAtAction(nameof(GetUser), new { id = newUser.UserID }, newUser);
                }
                // --- FIX 2: IMPROVED CATCH BLOCK ---
                catch (DbUpdateException ex) // Be more specific
                {
                    // If any step fails, roll back all changes
                    await transaction.RollbackAsync();
                    // Return the actual database error message
                    return StatusCode(500, $"Database error: {ex.InnerException?.Message ?? ex.Message}");
                }
                catch (Exception ex) // General catch-all
                {
                    await transaction.RollbackAsync();
                    return StatusCode(500, $"An error occurred: {ex.Message}");
                }
                // --- END OF FIX 2 ---
            }
        }
    }
}