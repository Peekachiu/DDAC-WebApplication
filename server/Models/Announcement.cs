using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("announcement")]
    public class Announcement
    {
        [Key]
        [Column("announcementID")]
        public int AnnouncementID { get; set; }

        [Column("title")]
        public string Title { get; set; } = string.Empty;

        [Column("message")]
        public string Message { get; set; } = string.Empty;

        [Column("type")]
        public string Type { get; set; } = "info"; // info, warning, urgent, event

        [Column("audience")]
        public string Audience { get; set; } = "all"; // all, building-a, etc.

        [Column("scheduledDate")]
        public DateTime ScheduledDate { get; set; }

        [Column("status")]
        public string Status { get; set; } = "scheduled"; // draft, scheduled, sent

        [Column("sentDate")]
        public DateTime? SentDate { get; set; }

        [Column("createdBy")]
        public string CreatedBy { get; set; } = "Admin";
    }
}