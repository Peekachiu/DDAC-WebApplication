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

        // DbSets for the tables we need to access
        public DbSet<User> Users { get; set; } = default!;
        public DbSet<Login> Logins { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Login>().ToTable("login");
            // Configure the primary key for the 'Login' entity
            modelBuilder.Entity<Login>()
                .HasKey(l => l.Email);

            // Configure the one-to-one relationship
            modelBuilder.Entity<Login>()
                .HasOne(l => l.User)
                .WithOne(u => u.Login)
                .HasForeignKey<Login>(l => l.UserID);
            modelBuilder.Entity<User>().ToTable("user");
        }
    }
}