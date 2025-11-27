using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("venue")]
    public class Venue
    {
        [Key]
        [Column("venueID")]
        public int VenueID { get; set; }

        [Column("venueImg")]
        public byte[]? VenueImg { get; set; }

        [Column("venueDescription")]
        public string VenueDescription { get; set; }= default!;
    }
}