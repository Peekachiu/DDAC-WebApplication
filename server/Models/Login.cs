using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("login")]
    public class Login
    {
        [Key]
        [Column("email")]
        public string Email { get; set; }= default!;

        [Column("password")]
        public string Password { get; set; }= default!;

        [Column("userID")]
        public int UserID { get; set; }

        // Navigation property
        [ForeignKey("UserID")]
        public User User { get; set; }= default!;
    }
}