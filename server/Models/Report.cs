using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("report")]
    public class Report
    {
        [Key]
        [Column("reportID")]
        public int ReportID { get; set; }

        [Column("reportDescription")]
        public string ReportDescription { get; set; }= default!;

        [Column("reportImg")]
        public byte[]? ReportImg { get; set; }

        [Column("reportStatus")]
        public int ReportStatus { get; set; }

        [Column("userID")]
        public int UserID { get; set; }

        // Navigation property
        [ForeignKey("UserID")]
        public User User { get; set; }= default!;
    }
}