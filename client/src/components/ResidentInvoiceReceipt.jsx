import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download, Search } from 'lucide-react';
import { toast } from 'sonner';

function ResidentInvoiceReceipt({ user }) {
  const [invoices] = useState([
    {
      id: 'INV-2025-001',
      month: 'November 2025',
      amount: 450,
      issueDate: '2025-10-15',
      dueDate: '2025-11-01',
      status: 'pending',
    },
    {
      id: 'INV-2025-002',
      month: 'October 2025',
      amount: 450,
      issueDate: '2025-09-15',
      dueDate: '2025-10-01',
      status: 'paid',
      paidDate: '2025-09-28',
    },
    {
      id: 'INV-2025-003',
      month: 'September 2025',
      amount: 450,
      issueDate: '2025-08-15',
      dueDate: '2025-09-01',
      status: 'paid',
      paidDate: '2025-08-29',
    },
    {
      id: 'INV-2025-004',
      month: 'August 2025',
      amount: 450,
      issueDate: '2025-07-15',
      dueDate: '2025-08-01',
      status: 'paid',
      paidDate: '2025-07-30',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleDownloadInvoice = (invoice) => {
    toast.success(`Invoice ${invoice.id} downloaded!`);
  };

  const handleDownloadReceipt = (invoice) => {
    toast.success(`Receipt for ${invoice.id} downloaded!`);
  };

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>Invoices & Receipts</h2>
        <p className="text-sm text-gray-600">View and download your invoices and payment receipts</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>My Invoices</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({invoices.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingInvoices.length})</TabsTrigger>
              <TabsTrigger value="paid">Paid ({paidInvoices.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.id}</TableCell>
                      <TableCell>{invoice.month}</TableCell>
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>{new Date(invoice.issueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownloadInvoice(invoice)}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Invoice
                          </Button>
                          {invoice.status === 'paid' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadReceipt(invoice)}
                            >
                              <Download className="mr-1 h-3 w-3" />
                              Receipt
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
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.id}</TableCell>
                      <TableCell>{invoice.month}</TableCell>
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDownloadInvoice(invoice)}
                        >
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="paid" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Paid Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paidInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.id}</TableCell>
                      <TableCell>{invoice.month}</TableCell>
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>
                        {invoice.paidDate && new Date(invoice.paidDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownloadInvoice(invoice)}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Invoice
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownloadReceipt(invoice)}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Receipt
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResidentInvoiceReceipt;
