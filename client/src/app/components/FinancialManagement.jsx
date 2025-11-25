'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { DollarSign, Plus, AlertCircle, Receipt, Trash2, Calendar, Clock, Download } from 'lucide-react'; // [CHANGED] Removed Filter/Search/CheckCircle to clean up imports if unused, kept necessary ones
import { toast } from 'sonner';

const API_URL = 'http://localhost:5016/api/Financial';

export default function FinancialManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  
  // [CHANGED] Removed Manual Payment State & Functions (No longer needed)
  /* const [isRecordPaymentDialogOpen, setIsRecordPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  */

  const [newInvoice, setNewInvoice] = useState({
    block: '',
    floor: '',
    unit: '',
    month: '',
    amount: '450.00',
    dueDate: ''
  });

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch invoices');
      const data = await response.json();
      setInvoices(data);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error('Error loading financial data.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateInvoice = async (e) => {
    e.preventDefault();

    const payload = {
      block: newInvoice.block,
      floor: newInvoice.floor,
      unit: newInvoice.unit,
      month: newInvoice.month,
      amount: parseFloat(newInvoice.amount),
      dueDate: newInvoice.dueDate || new Date().toISOString()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to generate invoice');

      toast.success('Invoice generated successfully!');
      setIsGenerateDialogOpen(false);
      setNewInvoice({ block: '', floor: '', unit: '', month: '', amount: '450.00', dueDate: '' });
      fetchInvoices(); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  // [CHANGED] Removed handleRecordPayment function

  const handleDeleteInvoice = async (id) => {
    if (!window.confirm('Are you sure you want to delete this invoice?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete invoice');

        toast.success('Invoice deleted successfully');
        setInvoices(invoices.filter(inv => inv.id !== id));
    } catch (error) {
        toast.error(error.message);
    }
  };

  const handleDownloadReceipt = (invoice) => {
    const fullUnit = `${invoice.block}-${invoice.floor}-${invoice.unit}`;
    const receiptContent = `
RESIDENTPRO OFFICIAL RECEIPT
----------------------------
Invoice ID:   #${invoice.id}
Date Issued:  ${new Date(invoice.issueDate).toLocaleDateString()}
Resident:     ${invoice.residentName}
Unit No:      ${fullUnit}
Description:  ${invoice.month}

PAYMENT DETAILS
----------------------------
Amount Paid:  $${invoice.amount.toFixed(2)}
Payment Date: ${invoice.paidDate ? new Date(invoice.paidDate).toLocaleDateString() : 'N/A'}
Method:       ${invoice.paymentMethod || 'N/A'}
Status:       PAID

----------------------------
Thank you for your payment.
ResidentPro Management System
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Receipt_${invoice.id}_${fullUnit}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success(`Receipt downloaded!`);
  };

  const filteredInvoices = invoices.filter((inv) => {
    const fullUnit = `${inv.block}-${inv.floor}-${inv.unit}`;
    const matchesSearch =
      (inv.residentName && inv.residentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (fullUnit.toLowerCase().includes(searchTerm.toLowerCase())) ||
      inv.id.toString().includes(searchTerm);
    
    const matchesStatus = filterStatus === 'all' || inv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // --- STATS CALCULATIONS ---
  const totalRevenue = invoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
  const totalOutstanding = invoices.filter((i) => i.status !== 'paid').reduce((sum, i) => sum + i.amount, 0);
  const pendingAmount = invoices.filter((i) => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);
  
  const currentMonthRevenue = invoices
    .filter((i) => {
      if (i.status !== 'paid' || !i.paidDate) return false;
      const paidDate = new Date(i.paidDate);
      const now = new Date();
      return paidDate.getMonth() === now.getMonth() && paidDate.getFullYear() === now.getFullYear();
    })
    .reduce((sum, i) => sum + i.amount, 0);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid': return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue': return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const residentInvoices = invoices.filter((inv) => {
    const invFull = `${inv.block}-${inv.floor}-${inv.unit}`;
    return invFull === user.unit; 
  });
  
  const displayInvoices = isAdmin ? filteredInvoices : residentInvoices;

  if (isLoading) return <div className="p-8 text-center">Loading financial records...</div>;

  // --- RESIDENT VIEW ---
  if (!isAdmin) {
    return (
      <div className="space-y-6">
        <div>
          <h2>Invoices & Receipts</h2>
          <p className="text-sm text-gray-600">View your maintenance fee invoices</p>
        </div>
        <Card>
          <CardHeader><CardTitle>My Invoices</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Month</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {residentInvoices.length === 0 ? (
                   <TableRow><TableCell colSpan={6} className="text-center py-4">No invoices found.</TableCell></TableRow>
                ) : (
                   residentInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>#{invoice.id}</TableCell>
                      <TableCell>{invoice.month}</TableCell>
                      <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        {invoice.status === 'paid' && (
                          <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(invoice)}>
                            <Download className="mr-2 h-4 w-4" /> Receipt
                          </Button>
                        )}
                        {/* Note: Residents pay via automatic/external means, so no manual Pay button here unless Stripe integration is added */}
                      </TableCell>
                    </TableRow>
                   ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- ADMIN VIEW ---
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Financial Management</h2>
          <p className="text-sm text-gray-600">Manage invoices and track revenue</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" /> Generate Invoice</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate Invoice</DialogTitle>
                <DialogDescription>Create a fee for a specific unit</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleGenerateInvoice} className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-2">
                    <Label>Block</Label>
                    <Input value={newInvoice.block} onChange={(e) => setNewInvoice({ ...newInvoice, block: e.target.value })} placeholder="A" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Floor</Label>
                    <Input value={newInvoice.floor} onChange={(e) => setNewInvoice({ ...newInvoice, floor: e.target.value })} placeholder="10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Unit</Label>
                    <Input value={newInvoice.unit} onChange={(e) => setNewInvoice({ ...newInvoice, unit: e.target.value })} placeholder="05" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="month">Billing Month/Desc</Label>
                  <Input id="month" value={newInvoice.month} onChange={(e) => setNewInvoice({ ...newInvoice, month: e.target.value })} placeholder="e.g. November 2025" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input id="amount" type="number" step="0.01" value={newInvoice.amount} onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" value={newInvoice.dueDate} onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })} required />
                </div>
                <Button type="submit" className="w-full">Generate</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl text-green-600 font-bold">${totalRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg"><DollarSign className="h-6 w-6 text-green-600"/></div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue (This Month)</p>
              <p className="text-2xl text-blue-600 font-bold">${currentMonthRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg"><Calendar className="h-6 w-6 text-blue-600"/></div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Outstanding</p>
              <p className="text-2xl text-orange-600 font-bold">${totalOutstanding.toFixed(2)}</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg"><AlertCircle className="h-6 w-6 text-orange-600"/></div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
             <div>
              <p className="text-sm text-gray-600">Pending Amount</p>
              <p className="text-2xl text-yellow-600 font-bold">${pendingAmount.toFixed(2)}</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg"><Clock className="h-6 w-6 text-yellow-600"/></div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Invoice List</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-64">
                <Input className="pl-2" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Resident</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>#{invoice.id}</TableCell>
                  <TableCell>{invoice.residentName}</TableCell>
                  <TableCell>{`${invoice.block}-${invoice.floor}-${invoice.unit}`}</TableCell>
                  <TableCell>{invoice.month}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                        {/* [CHANGED] Removed "Pay" button. Only show Receipt if paid. */}
                        {invoice.status === 'paid' && (
                          <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(invoice)}>
                              <Receipt className="mr-2 h-4 w-4" />
                          </Button>
                        )}
                        
                        <Button 
                            size="sm" 
                            variant="destructive" 
                            onClick={() => handleDeleteInvoice(invoice.id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* [CHANGED] Removed Record Payment Dialog */}
    </div>
  );
}