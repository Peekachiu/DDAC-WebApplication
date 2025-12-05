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

        // Bookings & Facilities
        public DbSet<Facility> Facilities { get; set; } = default!;
        
        // [CHANGED] Unified Booking Table
        public DbSet<Booking> Bookings { get; set; } = default!;
        
        public DbSet<Visitor> Visitors { get; set; } = default!;
        public DbSet<Report> Reports { get; set; } = default!;

        // Communication
        public DbSet<Announcement> Announcements { get; set; } = default!;
        public DbSet<UserAnnouncement> UserAnnouncements { get; set; } = default!;
        public DbSet<BlockedDate> BlockedDates { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Login>().ToTable("login").HasKey(l => l.Email);
            modelBuilder.Entity<User>().ToTable("user");
            modelBuilder.Entity<Property>().ToTable("property");
            modelBuilder.Entity<ManagementFee>().ToTable("management_fee");
            modelBuilder.Entity<Invoice>().ToTable("invoice");
            modelBuilder.Entity<Facility>().ToTable("facility");
            modelBuilder.Entity<Visitor>().ToTable("visitor");
            modelBuilder.Entity<Report>().ToTable("report");
            modelBuilder.Entity<Announcement>().ToTable("announcement");
            modelBuilder.Entity<UserAnnouncement>().ToTable("user_announcement");
            modelBuilder.Entity<Booking>().ToTable("booking");
            modelBuilder.Entity<BlockedDate>().ToTable("blocked_date");
        }
    }
}