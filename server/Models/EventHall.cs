using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("event_hall")]
    public class EventHall
    {
        [Key]
        [Column("hBookingID")]
        public int HBookingID { get; set; }

        [Column("bookingDate")]
        public DateTime BookingDate { get; set; }

        [Column("startTime")]
        public TimeSpan StartTime { get; set; }

        [Column("duration")]
        public int Duration { get; set; }

        [Column("status")]
        public int Status { get; set; }

        [Column("userID")]
        public int UserID { get; set; }

        [Column("venueID")]
        public int VenueID { get; set; }

        // Navigation properties
        [ForeignKey("UserID")]
        public User User { get; set; } = default!;

        [ForeignKey("VenueID")]
        public Venue Venue { get; set; }= default!;
    }
}