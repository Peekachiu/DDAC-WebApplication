using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("user")]
    public class User
    {
        [Key]
        [Column("userID")]
        public int UserID { get; set; }

        [Column("firstName")]
        public string FirstName { get; set; }= default!;

        [Column("lastName")]
        public string LastName { get; set; }= default!;

        [Column("identityNumber")]
        public string IdentityNumber { get; set; }= default!;

        [Column("contactNumber")]
        public string ContactNumber { get; set; }= default!;

        [Column("email")]
        public string Email { get; set; }= default!;

        [Column("role")]
        public int Role { get; set; }

        [Column("propertyID")]
        public int PropertyID { get; set; }

        // Navigation properties
        [ForeignKey("PropertyID")]
        public Property Property { get; set; }= default!;
        public Login Login { get; set; }= default!;
        public ICollection<Visitor> Visitors { get; set; }= default!;
        public ICollection<Report> Reports { get; set; }= default!;
        public ICollection<SportFacility> SportFacilities { get; set; }= default!;
        public ICollection<EventHall> EventHalls { get; set; }= default!;
    }
}