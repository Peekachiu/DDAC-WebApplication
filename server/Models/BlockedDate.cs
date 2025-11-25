using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("blocked_date")]
    public class BlockedDate
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("facility_name")]
        public string FacilityName { get; set; } = string.Empty;

        [Column("date")]
        public DateTime Date { get; set; }

        [Column("reason")]
        public string Reason { get; set; } = string.Empty;
    }
}