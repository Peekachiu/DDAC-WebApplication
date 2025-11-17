using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("visitor")]
    public class Visitor
    {
        [Key]
        [Column("visitorID")]
        public int VisitorID { get; set; }

        [Column("visitorName")]
        public string VisitorName { get; set; }= default!;

        [Column("visitorContactNumber")]
        public string VisitorContactNumber { get; set; }= default!;

        [Column("visitDate")]
        public DateTime VisitDate { get; set; }

        [Column("visitTime")]
        public TimeSpan VisitTime { get; set; }

        [Column("carPlate")]
        public string? CarPlate { get; set; }

        [Column("status")]
        public int Status { get; set; }

        [Column("userID")]
        public int UserID { get; set; }

        // Navigation property
        [ForeignKey("UserID")]
        public User User { get; set; }= default!;
    }
}