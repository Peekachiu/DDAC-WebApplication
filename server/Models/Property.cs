using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("property")]
    public class Property
    {
        [Key]
        [Column("propertyID")]
        public int PropertyID { get; set; }

        [Column("block")]
        public string Block { get; set; }= default!;

        [Column("floor")]
        public string Floor { get; set; }= default!;

        [Column("unit")]
        public string Unit { get; set; }= default!;
    }
}