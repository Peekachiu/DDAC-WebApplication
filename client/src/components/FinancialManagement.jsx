import { useState } from 'react';
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

export default function FinancialManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2025-001',
      residentName: 'John Smith',
      unit: 'Unit A-101',
      month: 'November 2025',
      amount: 450,
      issueDate: '2025-10-15',
      dueDate: '2025-11-01',
      status: 'pending',
    },
    {
      id: 'INV-2025-002',
      residentName: 'Sarah Johnson',
      unit: 'Unit B-205',
      month: 'November 2025',
      amount: 450,
      issueDate: '2025-10-15',
      dueDate: '2025-11-01',
      status: 'paid',
      paidDate: '2025-10-28',
      paymentMethod: 'Credit Card',
    },
    {
      id: 'INV-2025-003',
      residentName: 'Mike Wilson',
      unit: 'Unit C-304',
      month: 'November 2025',
      amount: 450,
      issueDate: '2025-10-15',
      dueDate: '2025-11-01',
      status: 'overdue',
    },
    {
      id: 'INV-2025-004',
      residentName: 'Emily Chen',
      unit: 'Unit D-401',
      month: 'November 2025',
      amount: 450,
      issueDate: '2025-10-15',
      dueDate: '2025-11-01',
      status: 'paid',
      paidDate: '2025-10-25',
      paymentMethod: 'Bank Transfer',
    },
    {
      id: 'INV-2025-005',
      residentName: 'John Smith',
      unit: 'Unit A-101',
      month: 'October 2025',
      amount: 450,
      issueDate: '2025-09-15',
      dueDate: '2025-10-01',
      status: 'paid',
      paidDate: '2025-09-28',
      paymentMethod: 'Credit Card',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [isRecordPaymentDialogOpen, setIsRecordPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  // Generate new invoice
  const [newInvoice, setNewInvoice] = useState({
    unit: '',
    month: '',
    amount: '450',
  });

  const handleGenerateInvoice = (e) => {
    e.preventDefault();

    // Find resident name based on unit (mock data)
    const residentMap = {
      'Unit A-101': 'John Smith',
      'Unit B-205': 'Sarah Johnson',
      'Unit C-304': 'Mike Wilson',
      'Unit D-401': 'Emily Chen',
      'Unit A-203': 'David Brown',
    };

    const invoice = {
      id: `INV-2025-${(invoices.length + 1).toString().padStart(3, '0')}`,
      residentName: residentMap[newInvoice.unit] || 'Unknown',
      unit: newInvoice.unit,
      month: newInvoice.month,
      amount: parseFloat(newInvoice.amount),
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString().split('T')[0],
      status: 'pending',
    };

    setInvoices([invoice, ...invoices]);
    setNewInvoice({ unit: '', month: '', amount: '450' });
    setIsGenerateDialogOpen(false);
    toast.success('Invoice generated successfully!');
  };

  const handleRecordPayment = (e) => {
    e.preventDefault();

    if (!selectedInvoice) return;

    setInvoices(
      invoices.map((inv) =>
        inv.id === selectedInvoice.id
          ? {
              ...inv,
              status: 'paid',
              paidDate: paymentDate,
              paymentMethod: paymentMethod,
            }
          : inv
      )
    );

    setIsRecordPaymentDialogOpen(false);
    setSelectedInvoice(null);
    setPaymentMethod('');
    setPaymentDate('');
    toast.success('Payment recorded successfully!');
  };

  const handleDownloadReceipt = (invoice) => {
    toast.success(`Receipt for ${invoice.id} downloaded!`);
  };

  // Filter invoices
  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch =
      inv.residentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || inv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalRevenue = invoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
  const totalOutstanding = invoices.filter((i) => i.status !== 'paid').reduce((sum, i) => sum + i.amount, 0);
  const paidCount = invoices.filter((i) => i.status === 'paid').length;
  const overdueCount = invoices.filter((i) => i.status === 'overdue').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default:
        return null;
    }
  };

  // For residents - show only their invoices
  const residentInvoices = invoices.filter((inv) => inv.unit === user.unit);
  const displayInvoices = isAdmin ? filteredInvoices : residentInvoices;

  if (!isAdmin) {
    // Resident view - simple invoice list
    return (
      <div className="space-y-6">
        <div>
          <h2>Invoices & Receipts</h2>
          <p className="text-sm text-gray-600">View your maintenance fee invoices and receipts</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {residentInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>{invoice.id}</TableCell>
                    <TableCell>{invoice.month}</TableCell>
                    <TableCell>${invoice.amount}</TableCell>
                    <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>
                      {invoice.status === 'paid' && (
                        <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(invoice)}>
                          <Download className="mr-2 h-4 w-4" />
                          Receipt
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin view
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Financial Management</h2>
          <p className="text-sm text-gray-600">Manage invoices, payments, and financial reports</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Generate Invoice
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate New Invoice</DialogTitle>
                <DialogDescription>Create a maintenance fee invoice for a resident</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleGenerateInvoice} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="unit">Resident Unit</Label>
                  <Select value={newInvoice.unit} onValueChange={(value) => setNewInvoice({ ...newInvoice, unit: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Unit A-101">Unit A-101 - John Smith</SelectItem>
                      <SelectItem value="Unit B-205">Unit B-205 - Sarah Johnson</SelectItem>
                      <SelectItem value="Unit C-304">Unit C-304 - Mike Wilson</SelectItem>
                      <SelectItem value="Unit D-401">Unit D-401 - Emily Chen</SelectItem>
                      <SelectItem value="Unit A-203">Unit A-203 - David Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="month">Billing Period</Label>
                  <Input
                    id="month"
                    value={newInvoice.month}
                    onChange={(e) => setNewInvoice({ ...newInvoice, month: e.target.value })}
                    placeholder="e.g., December 2025"
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
                <Button type="submit" className="w-full">
                  Generate Invoice
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="mt-1 text-2xl text-green-600">${totalRevenue.toLocaleString()}</p>
                <p className="mt-1 text-xs text-gray-500">{paidCount} paid invoices</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Outstanding Fees</p>
                <p className="mt-1 text-2xl text-orange-600">${totalOutstanding.toLocaleString()}</p>
                <p className="mt-1 text-xs text-gray-500">{invoices.length - paidCount} unpaid</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-3">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue Accounts</p>
                <p className="mt-1 text-2xl text-red-600">{overdueCount}</p>
                <p className="mt-1 text-xs text-gray-500">Require follow-up</p>
              </div>
              <div className="rounded-lg bg-red-50 p-3">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Collection Rate</p>
                <p className="mt-1 text-2xl">
                  {invoices.length > 0 ? Math.round((paidCount / invoices.length) * 100) : 0}%
                </p>
                <p className="mt-1 text-xs text-gray-500">Payment success</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Invoice Management</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search invoices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
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
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Invoices ({invoices.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({invoices.filter((i) => i.status === 'pending').length})</TabsTrigger>
              <TabsTrigger value="overdue">Overdue ({overdueCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Resident</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.id}</TableCell>
                      <TableCell>{invoice.residentName}</TableCell>
                      <TableCell>{invoice.unit}</TableCell>
                      <TableCell>{invoice.month}</TableCell>
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>{new Date(invoice.issueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {invoice.status === 'paid' ? (
                            <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(invoice)}>
                              <Receipt className="mr-1 h-3 w-3" />
                              Receipt
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => {
                                setSelectedInvoice(invoice);
                                setIsRecordPaymentDialogOpen(true);
                              }}
                            >
                              Record Payment
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="pending" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Resident</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices
                    .filter((i) => i.status === 'pending')
                    .map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>{invoice.id}</TableCell>
                        <TableCell>{invoice.residentName}</TableCell>
                        <TableCell>{invoice.unit}</TableCell>
                        <TableCell>{invoice.month}</TableCell>
                        <TableCell>${invoice.amount}</TableCell>
                        <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedInvoice(invoice);
                              setIsRecordPaymentDialogOpen(true);
                            }}
                          >
                            Record Payment
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="overdue" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Resident</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Days Overdue</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices
                    .filter((i) => i.status === 'overdue')
                    .map((invoice) => {
                      const daysOverdue = Math.floor(
                        (new Date().getTime() - new Date(invoice.dueDate).getTime()) / (1000 * 60 * 60 * 24)
                      );
                      return (
                        <TableRow key={invoice.id}>
                          <TableCell>{invoice.id}</TableCell>
                          <TableCell>{invoice.residentName}</TableCell>
                          <TableCell>{invoice.unit}</TableCell>
                          <TableCell>{invoice.month}</TableCell>
                          <TableCell>${invoice.amount}</TableCell>
                          <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <span className="text-red-600">{daysOverdue} days</span>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              onClick={() => {
                                setSelectedInvoice(invoice);
                                setIsRecordPaymentDialogOpen(true);
                              }}
                            >
                              Record Payment
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Record Payment Dialog */}
      <Dialog open={isRecordPaymentDialogOpen} onOpenChange={setIsRecordPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Record Payment</DialogTitle>
            <DialogDescription>Record incoming payment for invoice {selectedInvoice?.id}</DialogDescription>
          </DialogHeader>
          {selectedInvoice && (
            <div className="mb-4 rounded-lg bg-blue-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="text-2xl">${selectedInvoice.amount}</p>
                  <p className="text-xs text-gray-500">
                    {selectedInvoice.residentName} - {selectedInvoice.unit}
                  </p>
                </div>
              </div>
            </div>
          )}
          <form onSubmit={handleRecordPayment} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="paymentDate">Payment Date</Label>
              <Input
                id="paymentDate"
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                  <SelectItem value="Cash">Cash</SelectItem>
                  <SelectItem value="Check">Check</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Confirm Payment
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
