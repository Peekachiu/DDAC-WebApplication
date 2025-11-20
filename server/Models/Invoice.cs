using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("invoice")]
    public class Invoice
    {
        [Key]
        [Column("invoiceID")]
        public int InvoiceID { get; set; }

        [Column("invoiceDate")]
        public DateTime InvoiceDate { get; set; }

        [Column("invoiceTime")]
        public TimeSpan InvoiceTime { get; set; }

        [Column("amount")]
        public int Amount { get; set; }

        [Column("paymentID")]
        public int PaymentID { get; set; }

        // Navigation property
        [ForeignKey("PaymentID")]
        public ManagementFee ManagementFee { get; set; }= default!;
    }
}