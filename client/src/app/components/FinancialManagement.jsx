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
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DollarSign, Plus, FileText, Download, Search, Filter, CheckCircle, AlertCircle, Receipt } from 'lucide-react';
import { toast } from 'sonner';

const API_URL = 'http://localhost:5016/api/Financial';

export default function FinancialManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  // State variables
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Dialog states
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [isRecordPaymentDialogOpen, setIsRecordPaymentDialogOpen] = useState(false);
  
  // Selected item for actions
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  
  // Form states
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [newInvoice, setNewInvoice] = useState({
    unit: '',
    month: '', // Description field
    amount: '450',
    dueDate: ''
  });

  // 1. Fetch Data from Backend
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
      toast.error('Error loading financial data. Is the backend running?');
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Handle Generate Invoice (POST)
  const handleGenerateInvoice = async (e) => {
    e.preventDefault();

    const payload = {
      unit: newInvoice.unit,
      month: newInvoice.month,
      amount: parseInt(newInvoice.amount),
      dueDate: newInvoice.dueDate || new Date().toISOString()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to generate invoice');
      }

      toast.success('Invoice generated successfully!');
      setIsGenerateDialogOpen(false);
      // Reset form
      setNewInvoice({ unit: '', month: '', amount: '450', dueDate: '' });
      // Refresh list
      fetchInvoices(); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 3. Handle Record Payment (PUT)
  const handleRecordPayment = async (e) => {
    e.preventDefault();
    if (!selectedInvoice) return;

    const payload = {
      paymentMethod: paymentMethod,
      paymentDate: paymentDate || new Date().toISOString()
    };

    try {
      const response = await fetch(`${API_URL}/pay/${selectedInvoice.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to record payment');

      toast.success('Payment recorded successfully!');
      setIsRecordPaymentDialogOpen(false);
      setSelectedInvoice(null);
      setPaymentMethod('');
      setPaymentDate('');
      fetchInvoices(); // Refresh list
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 4. Handle Download Receipt (Feature Added)
  const handleDownloadReceipt = (invoice) => {
    const receiptContent = `
RESIDENTPRO OFFICIAL RECEIPT
----------------------------
Invoice ID:   #${invoice.id}
Date Issued:  ${new Date(invoice.issueDate).toLocaleDateString()}
Resident:     ${invoice.residentName}
Unit No:      ${invoice.unit}
Description:  ${invoice.month}

PAYMENT DETAILS
----------------------------
Amount Paid:  $${invoice.amount}
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
    a.download = `Receipt_${invoice.id}_${invoice.unit}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success(`Receipt for Invoice #${invoice.id} downloaded!`);
  };

  // Filter logic
  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch =
      (inv.residentName && inv.residentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (inv.unit && inv.unit.toLowerCase().includes(searchTerm.toLowerCase())) ||
      inv.id.toString().includes(searchTerm);
    
    const matchesStatus = filterStatus === 'all' || inv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Statistics
  const totalRevenue = invoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
  const totalOutstanding = invoices.filter((i) => i.status !== 'paid').reduce((sum, i) => sum + i.amount, 0);
  const paidCount = invoices.filter((i) => i.status === 'paid').length;
  const overdueCount = invoices.filter((i) => i.status === 'overdue').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid': return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue': return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  // View selection
  const residentInvoices = invoices.filter((inv) => inv.unit === user.unit);
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
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        {invoice.status === 'paid' && (
                          <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(invoice)}>
                            <Download className="mr-2 h-4 w-4" /> Receipt
                          </Button>
                        )}
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
          <p className="text-sm text-gray-600">Manage invoices and record payments</p>
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
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit Number (e.g. A-10-05)</Label>
                  <Input 
                    id="unit" 
                    value={newInvoice.unit}
                    onChange={(e) => setNewInvoice({ ...newInvoice, unit: e.target.value })}
                    placeholder="Enter full unit number"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="month">Billing Month/Desc</Label>
                  <Input 
                    id="month" 
                    value={newInvoice.month}
                    onChange={(e) => setNewInvoice({ ...newInvoice, month: e.target.value })}
                    placeholder="e.g. November 2025"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input 
                    id="amount" 
                    type="number"
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input 
                    id="dueDate" 
                    type="date"
                    value={newInvoice.dueDate}
                    onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Generate</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl text-green-600 font-bold">${totalRevenue}</p>
              <p className="text-xs text-gray-500">{paidCount} paid</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg"><DollarSign className="h-6 w-6 text-green-600"/></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Outstanding</p>
              <p className="text-2xl text-orange-600 font-bold">${totalOutstanding}</p>
              <p className="text-xs text-gray-500">{invoices.length - paidCount} unpaid</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg"><AlertCircle className="h-6 w-6 text-orange-600"/></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
             <div>
              <p className="text-sm text-gray-600">Overdue</p>
              <p className="text-2xl text-red-600 font-bold">{overdueCount}</p>
              <p className="text-xs text-gray-500">Require action</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg"><FileText className="h-6 w-6 text-red-600"/></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
             <div>
              <p className="text-sm text-gray-600">Collection Rate</p>
              <p className="text-2xl font-bold">{invoices.length > 0 ? Math.round((paidCount / invoices.length) * 100) : 0}%</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg"><CheckCircle className="h-6 w-6 text-blue-600"/></div>
          </CardContent>
        </Card>
      </div>

      {/* Main Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Invoice List</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Search unit, name, ID..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" /> <SelectValue />
                </SelectTrigger>
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
                  <TableCell>{invoice.unit}</TableCell>
                  <TableCell>{invoice.month}</TableCell>
                  <TableCell>${invoice.amount}</TableCell>
                  <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    {invoice.status !== 'paid' ? (
                      <Button 
                        size="sm" 
                        onClick={() => {
                          setSelectedInvoice(invoice);
                          setIsRecordPaymentDialogOpen(true);
                        }}
                      >
                        Record Payment
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(invoice)}>
                        <Receipt className="mr-2 h-4 w-4" /> Receipt
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Record Payment Modal */}
      <Dialog open={isRecordPaymentDialogOpen} onOpenChange={setIsRecordPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Record Payment</DialogTitle>
            <DialogDescription>For Invoice #{selectedInvoice?.id} - {selectedInvoice?.unit}</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRecordPayment} className="space-y-4">
            <div className="space-y-2">
              <Label>Payment Date</Label>
              <Input 
                type="date" 
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
                <SelectTrigger><SelectValue placeholder="Select method" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cash">Cash</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="Check">Check</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Confirm Payment</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}