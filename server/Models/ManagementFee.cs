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

        [Column("issueDate")]
        public DateTime IssueDate { get; set; }

        [Column("dueDate")]
        public DateTime DueDate { get; set; }

        [Column("paymentDate")]
        public DateTime? PaymentDate { get; set; }

        [Column("paymentTime")]
        public TimeSpan PaymentTime { get; set; }

        // [CHANGED] Changed int to decimal
        [Column("amount", TypeName = "decimal(18, 2)")]
        public decimal Amount { get; set; }

        [Column("method")]
        public string Method { get; set; } = string.Empty;

        [Column("status")]
        public int Status { get; set; } // 0 = Pending, 1 = Paid

        [Column("propertyID")]
        public int PropertyID { get; set; }

        [ForeignKey("PropertyID")]
        public Property Property { get; set; } = default!;
    }
}