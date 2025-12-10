'use client'

import { useState, useEffect, useCallback } from 'react';
import { generateReceiptPDF } from '../../utils/pdfGenerator';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { DatePicker } from './ui/date-picker';
import { DollarSign, Plus, AlertCircle, Receipt, Trash2, Calendar, Clock, Download } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = 'http://localhost:5016/api/Financial';

export default function FinancialManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);

  const [newInvoice, setNewInvoice] = useState({
    block: '',
    floor: '',
    unit: '',
    month: '',
    amount: '450.00',
    dueDate: ''
  });

  const fetchInvoices = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (!response.ok) throw new Error('Failed to fetch invoices');
      const data = await response.json();
      setInvoices(data);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error('Error loading financial data.');
    } finally {
      setIsLoading(false);
    }
  }, [user.token]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const handleGenerateInvoice = async (e) => {
    e.preventDefault();

    const payload = {
      block: newInvoice.block,
      floor: newInvoice.floor,
      unit: newInvoice.unit,
      month: newInvoice.month,
      amount: parseFloat(newInvoice.amount),
      dueDate: newInvoice.dueDate ? format(newInvoice.dueDate, 'yyyy-MM-dd') : new Date().toISOString()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
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

  const handleDeleteInvoice = async (id) => {
    if (!window.confirm('Are you sure you want to delete this invoice?')) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });

      if (!response.ok) throw new Error('Failed to delete invoice');

      toast.success('Invoice deleted successfully');
      setInvoices(invoices.filter(inv => inv.id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDownloadReceipt = (invoice) => {
    try {
      generateReceiptPDF(invoice);
      toast.success(`Receipt downloaded!`);
    } catch (error) {
      console.error("PDF Generation Error:", error);
      toast.error("Failed to generate receipt PDF");
    }
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
      case 'paid': return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Paid</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Pending</Badge>;
      case 'overdue': return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Overdue</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Unknown</Badge>;
    }
  };

  const residentInvoices = invoices.filter((inv) => {
    const invFull = `${inv.block}-${inv.floor}-${inv.unit}`;
    return invFull === user.unit;
  });

  const displayInvoices = isAdmin ? filteredInvoices : residentInvoices;

  // Helper for Gradient Cards
  const GradientCard = ({ children, className }) => (
    <div className={`relative h-full rounded-xl glass border-0! p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {children}
    </div>
  );

  if (isLoading) return <div className="p-8 text-center">Loading financial records...</div>;

  // --- RESIDENT VIEW ---
  if (!isAdmin) {
    const totalPages = Math.ceil(residentInvoices.length / itemsPerPage);
    const paginatedList = residentInvoices.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <div className="space-y-6">
        <div>
          <h2>Invoices & Receipts</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">View your maintenance fee invoices</p>
        </div>
        <Card className="glass border-0!">
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
                {paginatedList.length === 0 ? (
                  <TableRow><TableCell colSpan={6} className="text-center py-4">No invoices found.</TableCell></TableRow>
                ) : (
                  paginatedList.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>#{invoice.id}</TableCell>
                      <TableCell>{invoice.month}</TableCell>
                      <TableCell>RM {invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{format(new Date(invoice.dueDate), 'dd MMM yyyy')}</TableCell>
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

            {totalPages > 1 && (
              <div className="mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className="cursor-pointer"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- ADMIN VIEW ---
  const totalPages = Math.ceil(displayInvoices.length / itemsPerPage);
  const paginatedList = displayInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Financial Management</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage invoices and track revenue</p>
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
                  <Label htmlFor="amount">Amount (RM)</Label>
                  <Input id="amount" type="number" step="0.01" value={newInvoice.amount} onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <DatePicker
                    date={newInvoice.dueDate}
                    setDate={(date) => setNewInvoice({ ...newInvoice, dueDate: date })}
                    fromDate={new Date()}
                  />
                </div>
                <Button type="submit" className="w-full">Generate</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Total Revenue</p>
              <p className="text-2xl text-green-600 dark:text-green-400 font-bold">RM {totalRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"><DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" /></div>
          </div>
        </GradientCard>

        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Revenue (This Month)</p>
              <p className="text-2xl text-blue-600 dark:text-blue-400 font-bold">RM {currentMonthRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg"><Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div>
          </div>
        </GradientCard>

        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Outstanding</p>
              <p className="text-2xl text-orange-600 dark:text-orange-400 font-bold">RM {totalOutstanding.toFixed(2)}</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg"><AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" /></div>
          </div>
        </GradientCard>

        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Pending Amount</p>
              <p className="text-2xl text-yellow-600 dark:text-yellow-400 font-bold">RM {pendingAmount.toFixed(2)}</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg"><Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" /></div>
          </div>
        </GradientCard>
      </div>

      <Card className="glass border-0!">
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
              {paginatedList.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>#{invoice.id}</TableCell>
                  <TableCell>{invoice.residentName}</TableCell>
                  <TableCell>{`${invoice.block}-${invoice.floor}-${invoice.unit}`}</TableCell>
                  <TableCell>{invoice.month}</TableCell>
                  <TableCell>RM {invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>{format(new Date(invoice.dueDate), 'dd MMM yyyy')}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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

          {totalPages > 1 && (
            <div className="mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}