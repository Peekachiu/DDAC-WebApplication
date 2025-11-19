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

        // Core & Auth
        public DbSet<User> Users { get; set; } = default!;
        public DbSet<Login> Logins { get; set; } = default!;
        public DbSet<Property> Properties { get; set; } = default!;
        
        // Financials
        public DbSet<ManagementFee> ManagementFees { get; set; } = default!;
        public DbSet<Invoice> Invoices { get; set; } = default!;

        // [ADDED] Bookings & Facilities
        public DbSet<Facility> Facilities { get; set; } = default!; // Master list of facilities
        public DbSet<SportFacility> SportFacilities { get; set; } = default!; // Sport Bookings
        public DbSet<EventHall> EventHalls { get; set; } = default!; // Event Bookings
        public DbSet<Venue> Venues { get; set; } = default!;
        public DbSet<Visitor> Visitors { get; set; } = default!;
        public DbSet<Report> Reports { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Login>().ToTable("login").HasKey(l => l.Email);
            modelBuilder.Entity<User>().ToTable("user");
            modelBuilder.Entity<Property>().ToTable("property");
            modelBuilder.Entity<ManagementFee>().ToTable("management_fee");
            modelBuilder.Entity<Invoice>().ToTable("invoice");

            // Map Booking Tables
            modelBuilder.Entity<Facility>().ToTable("facility");
            modelBuilder.Entity<SportFacility>().ToTable("sport_facility");
            modelBuilder.Entity<EventHall>().ToTable("event_hall");
            modelBuilder.Entity<Venue>().ToTable("venue");
            modelBuilder.Entity<Visitor>().ToTable("visitor");
            modelBuilder.Entity<Report>().ToTable("report");
        }
    }
}