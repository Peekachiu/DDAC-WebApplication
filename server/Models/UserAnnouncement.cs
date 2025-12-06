using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("user_announcement")]
    public class UserAnnouncement
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("userID")]
        public int UserID { get; set; }

        [Column("announcementID")]
        public int AnnouncementID { get; set; }

        [Column("isRead")]
        public bool IsRead { get; set; } = false;

        [Column("isDeleted")]
        public bool IsDeleted { get; set; } = false;

        [ForeignKey("UserID")]
        public User? User { get; set; }

        [ForeignKey("AnnouncementID")]
        public Announcement? Announcement { get; set; }
    }
}
