using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Login
    {
        [Key] // 'Email' is the primary key in your Login table
        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        // Foreign Key
        public int UserID { get; set; }

        // Navigation property to User
        [ForeignKey("UserID")]
        public User? User { get; set; }
    }
}