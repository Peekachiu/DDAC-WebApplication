using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("management_fee")]
    public class ManagementFee
    {
        [Key]
        [Column("paymentID")]
        public int PaymentID { get; set; }

        [Column("paymentDate")]
        public DateTime PaymentDate { get; set; }

        [Column("paymentTime")]
        public TimeSpan PaymentTime { get; set; }

        [Column("amount")]
        public int Amount { get; set; }

        [Column("method")]
        public string Method { get; set; }= default!;

        [Column("status")]
        public int Status { get; set; }

        [Column("propertyID")]
        public int PropertyID { get; set; }

        // Navigation properties
        [ForeignKey("PropertyID")]
        public Property Property { get; set; }= default!;
    }
}