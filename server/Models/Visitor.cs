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
        public string VisitorName { get; set; } = string.Empty;

        [Column("visitorContactNumber")]
        public string VisitorContactNumber { get; set; } = string.Empty;

        [Column("visitDate")]
        public DateTime VisitDate { get; set; }

        [Column("visitTime")]
        public TimeSpan VisitTime { get; set; }

        // [ADDED] To track when they leave. Nullable because they haven't left yet when created.
        [Column("checkOutTime")]
        public DateTime? CheckOutTime { get; set; }

        [Column("purpose")]
        public string Purpose { get; set; } = string.Empty;

        [Column("carPlate")]
        public string? CarPlate { get; set; }

        // 0 = Checked In, 1 = Checked Out
        [Column("status")]
        public int Status { get; set; } 

        [Column("userID")]
        public int UserID { get; set; }

        // Navigation property
        [ForeignKey("UserID")]
        public User? User { get; set; }
    }
}