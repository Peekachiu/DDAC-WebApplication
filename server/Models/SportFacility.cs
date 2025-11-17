using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("sport_facility")]
    public class SportFacility
    {
        [Key]
        [Column("sBookingID")]
        public int SBookingID { get; set; }

        [Column("sportName")]
        public string SportName { get; set; }= default!;

        [Column("bookingDate")]
        public DateTime BookingDate { get; set; }

        [Column("startTime")]
        public TimeSpan StartTime { get; set; }

        [Column("duration")]
        public int Duration { get; set; }

        [Column("court")]
        public int Court { get; set; }

        [Column("status")]
        public int Status { get; set; }

        [Column("userID")]
        public int UserID { get; set; }

        // Navigation property
        [ForeignKey("UserID")]
        public User User { get; set; }= default!;
    }
}