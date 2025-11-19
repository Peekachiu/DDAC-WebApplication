'use client'

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { DollarSign, CreditCard, Calendar, RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';

const API_URL = 'http://localhost:5016/api/Financial';

function ResidentManagementFee({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dialog & Form State
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  
  // Card Input State (For UI simulation)
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // 1. Fetch Invoices from Backend
  const fetchInvoices = useCallback(async () => {
    if (!user?.unit) return;

    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
      
      // Filter: Only show invoices for THIS resident's unit
      const myInvoices = data.filter(inv => 
        inv.unit.toLowerCase() === user.unit.toLowerCase()
      );
      
      setInvoices(myInvoices);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error('Failed to load payment records.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  // 2. Handle Payment Submission
  const handleMakePayment = async (e) => {
    e.preventDefault();

    if (!selectedInvoice) return;

    // Prepare payload for API
    const payload = {
      paymentMethod: paymentMethod,
      paymentDate: new Date().toISOString()
    };

    try {
      const response = await fetch(`${API_URL}/pay/${selectedInvoice.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Payment failed. Please try again.');

      toast.success('Payment successful! Receipt generated.');
      
      // Reset Form
      setIsPaymentDialogOpen(false);
      setSelectedInvoice(null);
      setPaymentMethod('');
      setCardNumber('');
      setExpiry('');
      setCvv('');

      // Refresh Data
      fetchInvoices();

    } catch (error) {
      toast.error(error.message);
    }
  };

  // 3. Derived State for UI
  // "Pending" includes both 'pending' and 'overdue' statuses from backend
  const pendingInvoices = invoices.filter(inv => inv.status !== 'paid');
  const paidInvoices = invoices.filter(inv => inv.status === 'paid');
  
  const totalDue = pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0);

  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading payment details...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Management Fee Payment</h2>
          <p className="text-sm text-gray-600">View and pay your monthly management fees</p>
        </div>
        <Button variant="outline" size="sm" onClick={fetchInvoices}>
          <RefreshCcw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Due</p>
                <p className="mt-1 text-2xl text-red-600">${totalDue}</p>
              </div>
              <div className="rounded-lg bg-red-50 p-3">
                <DollarSign className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Payments</p>
                <p className="mt-1 text-2xl">{pendingInvoices.length}</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-3">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Paid This Year</p>
                <p className="mt-1 text-2xl">{paidInvoices.length}</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Payments Section */}
      {pendingInvoices.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-orange-50 p-3">
                      <DollarSign className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{invoice.month}</p>
                      <p className="text-xs text-gray-500">
                        Due: {new Date(invoice.dueDate).toLocaleDateString()}
                        {invoice.status === 'overdue' && (
                          <span className="ml-2 text-red-600 font-bold">(Overdue)</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold">${invoice.amount}</p>
                    <Button
                      onClick={() => {
                        setSelectedInvoice(invoice);
                        setIsPaymentDialogOpen(true);
                      }}
                    >
                      Pay Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6 text-center text-gray-500">
            No pending payments. You are all caught up!
          </CardContent>
        </Card>
      )}

      {/* Payment History Section */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paidInvoices.length === 0 ? (
               <p className="text-sm text-gray-500">No payment history available.</p>
            ) : (
              paidInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-green-50 p-3">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{invoice.month}</p>
                      <p className="text-xs text-gray-500">
                        Paid on: {invoice.paidDate ? new Date(invoice.paidDate).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg">${invoice.amount}</p>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                      Paid
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Payment Modal Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make Payment</DialogTitle>
            <DialogDescription>
              Securely pay your management fee
            </DialogDescription>
          </DialogHeader>
          
          {selectedInvoice && (
            <div className="mb-4 rounded-lg bg-blue-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Amount to Pay</p>
                  <p className="text-2xl font-bold text-blue-700">${selectedInvoice.amount}</p>
                  <p className="text-xs text-gray-500">For: {selectedInvoice.month}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleMakePayment} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="Debit Card">Debit Card</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                  <SelectItem value="Online Banking">Online Banking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Simulated Card Input Fields */}
            {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      maxLength={3}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <Button type="submit" className="w-full">
              Confirm Payment
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ResidentManagementFee;