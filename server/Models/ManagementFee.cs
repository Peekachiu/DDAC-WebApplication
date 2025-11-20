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

        // The date the invoice was issued (Created)
        [Column("issueDate")]
        public DateTime IssueDate { get; set; }

        // The date the payment is actually due
        [Column("dueDate")]
        public DateTime DueDate { get; set; }

        // The date the payment was made (Null if pending)
        [Column("paymentDate")]
        public DateTime? PaymentDate { get; set; }

        [Column("paymentTime")]
        public TimeSpan PaymentTime { get; set; }

        [Column("amount")]
        public int Amount { get; set; }

        [Column("method")]
        public string Method { get; set; } = string.Empty;

        [Column("status")]
        public int Status { get; set; } // 0 = Pending, 1 = Paid

        [Column("propertyID")]
        public int PropertyID { get; set; }

        // Navigation properties
        [ForeignKey("PropertyID")]
        public Property Property { get; set; } = default!;
    }
}