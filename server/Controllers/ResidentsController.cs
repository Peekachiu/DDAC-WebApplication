using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartResidentialApi.Data;
using SmartResidentialApi.Models;

namespace SmartResidentialApi.Controllers // Make sure this namespace matches your project name
{
    [ApiController]
    [Route("api/[controller]")] // This sets the URL to "/api/residents"
    public class ResidentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ResidentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /api/residents
        // This will get all residents from the database
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resident>>> GetResidents()
        {
            return await _context.Residents.ToListAsync();
        }

        // POST: /api/residents
        // This will create a new resident in the database
        [HttpPost]
        public async Task<ActionResult<Resident>> PostResident(Resident resident)
        {
            _context.Residents.Add(resident);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetResidents), new { id = resident.Id }, resident);
        }
    }
}