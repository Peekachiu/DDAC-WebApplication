using Microsoft.EntityFrameworkCore;
using SmartResidentialApi.Models; // Import your models

namespace SmartResidentialApi.Data // Make sure this namespace matches your project name
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // This tells EF Core to create a "Residents" table from your "Resident" model
        public DbSet<Resident> Residents { get; set; }
    }
}