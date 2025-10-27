import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { DollarSign, CreditCard, Calendar } from 'lucide-react';
import { toast } from 'sonner';

function ResidentManagementFee({ user }) {
  const [payments, setPayments] = useState([
    {
      id: '1',
      month: 'November 2025',
      amount: 450,
      dueDate: '2025-11-01',
      status: 'pending',
    },
    {
      id: '2',
      month: 'October 2025',
      amount: 450,
      dueDate: '2025-10-01',
      status: 'paid',
      paymentDate: '2025-09-28',
    },
    {
      id: '3',
      month: 'September 2025',
      amount: 450,
      dueDate: '2025-09-01',
      status: 'paid',
      paymentDate: '2025-08-29',
    },
  ]);

  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleMakePayment = (e) => {
    e.preventDefault();

    if (!selectedPayment) return;

    setPayments(
      payments.map((p) =>
        p.id === selectedPayment.id
          ? {
              ...p,
              status: 'paid',
              paymentDate: new Date().toISOString().split('T')[0],
            }
          : p
      )
    );

    setIsPaymentDialogOpen(false);
    setSelectedPayment(null);
    setPaymentMethod('');
    toast.success('Payment processed successfully!');
  };

  const pendingPayments = payments.filter((p) => p.status === 'pending' || p.status === 'overdue');
  const paidPayments = payments.filter((p) => p.status === 'paid');
  const totalDue = pendingPayments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2>Management Fee Payment</h2>
        <p className="text-sm text-gray-600">View and pay your monthly management fees</p>
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
                <p className="mt-1 text-2xl">{pendingPayments.length}</p>
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
                <p className="mt-1 text-2xl">{paidPayments.length}</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Payments */}
      {pendingPayments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-orange-50 p-3">
                      <DollarSign className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm">{payment.month}</p>
                      <p className="text-xs text-gray-500">
                        Due: {new Date(payment.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg">${payment.amount}</p>
                    <Button
                      onClick={() => {
                        setSelectedPayment(payment);
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
      )}

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paidPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm">{payment.month}</p>
                    <p className="text-xs text-gray-500">
                      Paid on: {payment.paymentDate && new Date(payment.paymentDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg">${payment.amount}</p>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                    Paid
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make Payment</DialogTitle>
            <DialogDescription>
              Complete your management fee payment
            </DialogDescription>
          </DialogHeader>
          {selectedPayment && (
            <div className="mb-4 rounded-lg bg-blue-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Amount to Pay</p>
                  <p className="text-2xl">${selectedPayment.amount}</p>
                  <p className="text-xs text-gray-500">For {selectedPayment.month}</p>
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
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="debit-card">Debit Card</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="online-banking">Online Banking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentMethod === 'credit-card' || paymentMethod === 'debit-card' ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>
              </>
            ) : null}

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
