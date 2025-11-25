using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("facility")]
    public class Facility
    {
        [Key]
        [Column("facilityID")]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; } = string.Empty;

        [Column("type")]
        public string Type { get; set; } = string.Empty; // "sport" or "event"

        [Column("description")]
        public string Description { get; set; } = string.Empty;

        [Column("capacity")]
        public int Capacity { get; set; }

        [Column("status")]
        public string Status { get; set; } = "available"; // "available" or "maintenance"
    }
}