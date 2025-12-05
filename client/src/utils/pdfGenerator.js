
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Helper to format currency
const formatCurrency = (amount) => `RM ${parseFloat(amount).toFixed(2)}`;

// Helper to format date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

export const generateInvoicePDF = (invoice) => {
  const doc = new jsPDF();
  const fullUnit = `${invoice.block}-${invoice.floor}-${invoice.unit}`;

  // -- Header --
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 40);
  doc.text('INVOICE', 105, 20, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('ResidentPro Management System', 105, 26, { align: 'center' });

  // -- Invoice Details Box --
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 248, 248);
  doc.rect(14, 35, 182, 35, 'FD');

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  // Left side
  doc.setFont('helvetica', 'bold');
  doc.text('Invoice #:', 20, 45);
  doc.setFont('helvetica', 'normal');
  doc.text(invoice.id.toString(), 60, 45);

  doc.setFont('helvetica', 'bold');
  doc.text('Issue Date:', 20, 52);
  doc.setFont('helvetica', 'normal');
  doc.text(formatDate(invoice.issueDate), 60, 52);

  doc.setFont('helvetica', 'bold');
  doc.text('Due Date:', 20, 59);
  doc.setFont('helvetica', 'normal');
  doc.text(formatDate(invoice.dueDate), 60, 59);

  // Right side
  doc.setFont('helvetica', 'bold');
  doc.text('Status:', 120, 45);
  doc.setTextColor(invoice.status === 'paid' ? 0 : 200, invoice.status === 'paid' ? 150 : 0, 0); // Green if paid, Red-ish if not
  doc.text(invoice.status.toUpperCase(), 150, 45);
  doc.setTextColor(0, 0, 0); // Reset

  doc.setFont('helvetica', 'bold');
  doc.text('Amount Due:', 120, 52);
  doc.setFont('helvetica', 'normal');
  doc.text(formatCurrency(invoice.amount), 150, 52);

  // -- Bill To Section --
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Bill To:', 14, 85);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Resident: ${invoice.residentName}`, 14, 92);
  doc.text(`Unit No:  ${fullUnit}`, 14, 98);

  // -- Table Items --
  const tableColumn = ["Description", "Month", "Amount (RM)"];
  const tableRows = [
    [
      "Maintenance Fee",
      invoice.month,
      formatCurrency(invoice.amount)
    ]
  ];

  autoTable(doc, {
    startY: 110,
    head: [tableColumn],
    body: tableRows,
    theme: 'grid',
    headStyles: { fillColor: [66, 66, 66] },
    styles: { fontSize: 10, cellPadding: 5 },
  });

  // -- Total Section --
  const finalY = doc.lastAutoTable.finalY + 10;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total Amount: ${formatCurrency(invoice.amount)}`, 196, finalY, { align: 'right' });

  // -- Footer --
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(150, 150, 150);
  doc.text('Please make payment before the due date.', 105, 280, { align: 'center' });
  doc.text('Thank you for being a valued resident.', 105, 285, { align: 'center' });

  // Save the PDF
  doc.save(`Invoice_${invoice.id}.pdf`);
};

export const generateReceiptPDF = (invoice) => {
  const doc = new jsPDF();
  const fullUnit = `${invoice.block}-${invoice.floor}-${invoice.unit}`;

  // -- Header --
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 40);
  doc.text('OFFICIAL RECEIPT', 105, 20, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('ResidentPro Management System', 105, 26, { align: 'center' });

  // -- Receipt Details Box --
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(240, 255, 240); // Light green for receipt
  doc.rect(14, 35, 182, 35, 'FD');

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  // Left side
  doc.setFont('helvetica', 'bold');
  doc.text('Receipt For:', 20, 45);
  doc.setFont('helvetica', 'normal');
  doc.text(`Invoice #${invoice.id}`, 60, 45);

  doc.setFont('helvetica', 'bold');
  doc.text('Date Paid:', 20, 52);
  doc.setFont('helvetica', 'normal');
  doc.text(formatDate(invoice.paidDate), 60, 52);

  doc.setFont('helvetica', 'bold');
  doc.text('Payment Method:', 20, 59);
  doc.setFont('helvetica', 'normal');
  doc.text(invoice.paymentMethod || 'Online Transfer', 60, 59);

  // Right side
  doc.setFont('helvetica', 'bold');
  doc.text('Status:', 120, 45);
  doc.setTextColor(0, 150, 0);
  doc.text('PAID', 150, 45);
  doc.setTextColor(0, 0, 0);

  doc.setFont('helvetica', 'bold');
  doc.text('Amount Paid:', 120, 52);
  doc.setFont('helvetica', 'normal');
  doc.text(formatCurrency(invoice.amount), 150, 52);

  // -- Received From Section --
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Received From:', 14, 85);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Resident: ${invoice.residentName}`, 14, 92);
  doc.text(`Unit No:  ${fullUnit}`, 14, 98);

  // -- Table Items --
  const tableColumn = ["Description", "Month", "Amount Paid (RM)"];
  const tableRows = [
    [
      "Maintenance Fee Payment",
      invoice.month,
      formatCurrency(invoice.amount)
    ]
  ];

  autoTable(doc, {
    startY: 110,
    head: [tableColumn],
    body: tableRows,
    theme: 'grid',
    headStyles: { fillColor: [46, 139, 87] }, // SeaGreen
    styles: { fontSize: 10, cellPadding: 5 },
  });

  // -- Total Section --
  const finalY = doc.lastAutoTable.finalY + 10;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total Paid: ${formatCurrency(invoice.amount)}`, 196, finalY, { align: 'right' });

  // -- Footer --
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(150, 150, 150);
  doc.text('This is a computer generated receipt. No signature is required.', 105, 280, { align: 'center' });

  // Save the PDF
  doc.save(`Receipt_${invoice.id}.pdf`);
};
