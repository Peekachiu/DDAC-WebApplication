'use client'

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { DollarSign, CreditCard, Calendar, RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';

const BASE_API_URL = 'http://localhost:5016/api';

const stripePromise = loadStripe(
  "PUBLISHABLE_KEY"
);

function ResidentManagementFee({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [preparingPayment, setPreparingPayment] = useState(false);

  const fetchInvoices = useCallback(async () => {
    if (!user?.unit) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/Financial`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      const myInvoices = data.filter(
        inv => inv.unit.toLowerCase() === user.unit.toLowerCase()
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

  // --------------------------
  // 🔥 FIXED updateInvoiceStatus (Works Now)
  // --------------------------
  const updateInvoiceStatus = async (invoiceId, paymentIntent) => {
    try {
        console.log("PaymentIntent received:", paymentIntent);

        // Send ONLY the payment method ID to backend
        const payload = {
            paymentMethod: paymentIntent.payment_method
        };

        const response = await fetch(`${BASE_API_URL}/Financial/pay/${invoiceId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Database update failed");

        const result = await response.json();

        toast.success(`Payment successful! (${result.method})`);

        fetchInvoices();

    } catch (error) {
        console.error("DB Update Failed:", error);
        toast.error("Payment succeeded but database update failed.");
    }
  };

  // --------------------------
  // 🔥 FIXED — Retrieve FULL PaymentIntent from Backend
  // --------------------------
  useEffect(() => {
    const clientSecretParam = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecretParam) return;

    stripePromise.then(async (stripe) => {
      if (!stripe) return;

      const piId = clientSecretParam.split("_secret")[0];

      // 🔥 Retrieve the fully expanded PaymentIntent FROM BACKEND
      const res = await fetch(`${BASE_API_URL}/payments/payment-intent/${piId}`);
      const paymentIntent = await res.json();

      console.log("Expanded PI (backend):", paymentIntent);

      if (paymentIntent && paymentIntent.status === "succeeded") {
        const pendingId = localStorage.getItem("pendingInvoiceId");

        if (pendingId) {
          await updateInvoiceStatus(pendingId, paymentIntent);
          localStorage.removeItem("pendingInvoiceId");
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    });
  }, [fetchInvoices]);

  // --------------------------
  // Pay Now
  // --------------------------
  const handleInitiatePayment = async (invoice) => {
    localStorage.setItem('pendingInvoiceId', invoice.id);
    setSelectedInvoice(invoice);
    setIsPaymentDialogOpen(true);
    setClientSecret(null);
    setPreparingPayment(true);

    try {
      const response = await axios.post(
        `${BASE_API_URL}/payments/create-payment-intent`,
        { amount: invoice.amount }
      );

      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error("Stripe initialization failed:", error);
      toast.error("Could not initialize secure payment system.");
      setIsPaymentDialogOpen(false);
    } finally {
      setPreparingPayment(false);
    }
  };

  // From Stripe CheckoutForm (non-redirect flows)
  const handleStripeSuccess = async (paymentIntent) => {
    if (!selectedInvoice) return;
    await updateInvoiceStatus(selectedInvoice.id, paymentIntent);
    setIsPaymentDialogOpen(false);
    localStorage.removeItem('pendingInvoiceId');
  };

  const pendingInvoices = invoices.filter(inv => inv.status !== 'paid');
  const paidInvoices = invoices.filter(inv => inv.status === 'paid');
  const totalDue = pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0);

  if (isLoading)
    return <div className="p-8 text-center text-gray-500">Loading payment details...</div>;

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
                <p className="mt-1 text-2xl text-red-600">RM {totalDue.toFixed(2)}</p>
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

      {/* Pending Payments */}
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
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold">RM {invoice.amount}</p>
                    <Button onClick={() => handleInitiatePayment(invoice)}>
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

      {/* Payment History */}
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
                        Paid on: {invoice.paymentDate
                          ? new Date(invoice.paymentDate).toLocaleDateString()
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg">RM {invoice.amount}</p>
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

      {/* Stripe Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Make Payment</DialogTitle>
            <DialogDescription>
              Securely pay RM {selectedInvoice?.amount} via Stripe
            </DialogDescription>
          </DialogHeader>

          {preparingPayment ? (
            <div className="py-8 text-center text-gray-500">Preparing secure checkout...</div>
          ) : clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm amount={selectedInvoice?.amount} onSuccess={handleStripeSuccess} />
            </Elements>
          ) : (
            <div className="py-8 text-center text-red-500">Failed to load secure payment form.</div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ResidentManagementFee;