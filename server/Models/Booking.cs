using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("booking")]
    public class Booking
    {
        [Key]
        [Column("bookingID")]
        public int BookingID { get; set; }

        [Column("bookingDate")]
        public DateTime BookingDate { get; set; }

        [Column("startTime")]
        public TimeSpan StartTime { get; set; }

        [Column("endTime")]
        public TimeSpan EndTime { get; set; }

        [Column("status")]
        public int Status { get; set; } // 0=Pending, 1=Approved, 2=Rejected, 3=Cancelled

        [Column("guests")]
        public int Guests { get; set; }

        [Column("purpose")]
        public string Purpose { get; set; } = string.Empty;

        // Foreign Keys
        [Column("userID")]
        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public User User { get; set; } = default!;

        [Column("facilityID")]
        public int FacilityID { get; set; }

        [ForeignKey("FacilityID")]
        public Facility Facility { get; set; } = default!;
    }
}