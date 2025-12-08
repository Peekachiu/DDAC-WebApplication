'use client'

import { useState, useEffect, useCallback } from 'react';
import { generateInvoicePDF, generateReceiptPDF } from '../../utils/pdfGenerator';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download, Search, RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = 'http://localhost:5016/api/Financial';

function ResidentInvoiceReceipt({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchInvoices = useCallback(async () => {
    if (!user?.unit) return;

    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (!response.ok) throw new Error('Failed to fetch invoices');

      const data = await response.json();

      // [FIXED] Filter using combined unit string
      const myInvoices = data.filter(inv => {
        const fullUnit = `${inv.block}-${inv.floor}-${inv.unit}`;
        return fullUnit.toLowerCase() === user.unit.toLowerCase();
      });

      setInvoices(myInvoices);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error('Failed to load invoices. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  // [FIXED] Updated to use separate Block/Floor/Unit fields
  // [FIXED] Updated to use PDF Generation


  const handleDownloadInvoice = (invoice) => {
    try {
      generateInvoicePDF(invoice);
      toast.success(`Invoice #${invoice.id} downloaded as PDF`);
    } catch (error) {
      console.error(error);
      toast.error('Failed to generate PDF');
    }
  };

  const handleDownloadReceipt = (invoice) => {
    try {
      generateReceiptPDF(invoice);
      toast.success(`Receipt for #${invoice.id} downloaded as PDF`);
    } catch (error) {
      console.error(error);
      toast.error('Failed to generate PDF');
    }
  };

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.id.toString().includes(searchTerm) ||
      inv.month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pendingInvoices = filteredInvoices.filter((i) => i.status === 'pending' || i.status === 'overdue');
  const paidInvoices = filteredInvoices.filter((i) => i.status === 'paid');

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading your invoices...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Invoices & Receipts</h2>
          <p className="text-sm text-gray-600">View and download your invoices and payment receipts</p>
        </div>
        <Button variant="outline" size="sm" onClick={fetchInvoices}>
          <RefreshCcw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      <Card className="glass border-0!">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>My Documents</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by ID or Month..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({invoices.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingInvoices.length})</TabsTrigger>
              <TabsTrigger value="paid">Paid ({paidInvoices.length})</TabsTrigger>
            </TabsList>

            {['all', 'pending', 'paid'].map((tabValue) => {
              const currentList = tabValue === 'all' ? filteredInvoices : tabValue === 'pending' ? pendingInvoices : paidInvoices;
              const totalPages = Math.ceil(currentList.length / itemsPerPage);
              const paginatedList = currentList.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              );

              return (
                <TabsContent key={tabValue} value={tabValue} className="mt-4">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice ID</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedList.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                              No records found.
                            </TableCell>
                          </TableRow>
                        ) : (
                          paginatedList.map((invoice) => (
                            <TableRow key={invoice.id}>
                              <TableCell>#{invoice.id}</TableCell>
                              <TableCell>{invoice.month}</TableCell>
                              <TableCell>RM {invoice.amount.toFixed(2)}</TableCell>
                              <TableCell>{new Date(invoice.issueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</TableCell>
                              <TableCell>{new Date(invoice.dueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</TableCell>
                              <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleDownloadInvoice(invoice)}
                                    title="Download Invoice"
                                  >
                                    <Download className="mr-1 h-3 w-3" />
                                    Inv.
                                  </Button>

                                  {invoice.status === 'paid' && (
                                    <Button
                                      size="sm"
                                      variant="default"
                                      onClick={() => handleDownloadReceipt(invoice)}
                                      title="Download Receipt"
                                    >
                                      <Download className="mr-1 h-3 w-3" />
                                      Rcpt.
                                    </Button>
                                  )}
                                </div>
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
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResidentInvoiceReceipt;