using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Visitor> Visitors { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<ManagementFee> ManagementFees { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<SportFacility> SportFacilities { get; set; }
        public DbSet<Venue> Venues { get; set; }
        public DbSet<EventHall> EventHalls { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Define composite primary keys or other specific relationships here if needed
            // For example, if 'login' has a one-to-one with 'user'
            modelBuilder.Entity<User>()
                .HasOne(u => u.Login)
                .WithOne(l => l.User)
                .HasForeignKey<Login>(l => l.UserID);
        }
    }
}