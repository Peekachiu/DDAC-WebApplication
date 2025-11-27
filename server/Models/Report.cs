using System;
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

        [Column("type")]
        public string Type { get; set; } = string.Empty; // "maintenance" or "complaint"

        [Column("category")]
        public string Category { get; set; } = string.Empty;

        [Column("subject")]
        public string Subject { get; set; } = string.Empty;

        // NOTE: Renamed from 'ReportDescription' to 'Description' to match Frontend
        [Column("description")]
        public string Description { get; set; } = string.Empty;

        [Column("priority")]
        public string Priority { get; set; } = "medium"; // "low", "medium", "high"

        // 0=Pending, 1=In-Progress, 2=Resolved, 3=Rejected
        [Column("reportStatus")]
        public int ReportStatus { get; set; } 

        [Column("submittedDate")]
        public DateTime SubmittedDate { get; set; }

        [Column("resolvedDate")]
        public DateTime? ResolvedDate { get; set; }

        [Column("assignedTo")]
        public string? AssignedTo { get; set; }

        [Column("resolutionNotes")]
        public string? ResolutionNotes { get; set; }

        // This is the field causing your error. We add it here.
        [Column("photoBase64")]
        public string? PhotoBase64 { get; set; }

        [Column("userID")]
        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public User? User { get; set; }
    }
}