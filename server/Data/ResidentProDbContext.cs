using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class ResidentProDbContext : DbContext
    {
        public ResidentProDbContext(DbContextOptions<ResidentProDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; } = default!;
        public DbSet<Login> Logins { get; set; } = default!;
        public DbSet<Property> Properties { get; set; } = default!;

        // [ADDED] Register the Financial Tables
        public DbSet<ManagementFee> ManagementFees { get; set; } = default!;
        public DbSet<Invoice> Invoices { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Login>().ToTable("login");
            modelBuilder.Entity<Login>().HasKey(l => l.Email);

            modelBuilder.Entity<Login>()
                .HasOne(l => l.User)
                .WithOne(u => u.Login)
                .HasForeignKey<Login>(l => l.UserID);
            
            modelBuilder.Entity<User>().ToTable("user");
            modelBuilder.Entity<Property>().ToTable("property");

            // [ADDED] Map Financial Tables
            modelBuilder.Entity<ManagementFee>().ToTable("management_fee");
            modelBuilder.Entity<Invoice>().ToTable("invoice");
        }
    }
}