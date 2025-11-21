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

// [CHANGE] Ensure this matches your backend port (usually 5254 for dotnet run)
const BASE_API_URL = 'http://localhost:5016/api';

// Replace with your Stripe Publishable Key
const stripePromise = loadStripe("pk_test_51SShspDHK3g2RSaD4TA2mWa4Ags0RudgGgjo8mzLeHTLgvlKGYStPWmIBTI0FyowL95p8NAOAXSnSYmp0kU88XHD00LtjssHh0");

function ResidentManagementFee({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dialog & Stripe State
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [preparingPayment, setPreparingPayment] = useState(false);

  // 1. Fetch Invoices from Backend
  const fetchInvoices = useCallback(async () => {
    if (!user?.unit) return;

    setIsLoading(true);
    try {
      // [CHANGE] Use the Financial controller endpoint
      const response = await fetch(`${BASE_API_URL}/Financial`);
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

  useEffect(() => {
    // Check if Stripe added the 'payment_intent_client_secret' to the URL
    const clientSecretParam = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecretParam) return;

    // If found, verify the status with Stripe
    stripePromise.then(async (stripe) => {
      if (!stripe) return;

      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecretParam);

      if (paymentIntent && paymentIntent.status === 'succeeded') {
         // 1. Retrieve the Invoice ID we saved before redirecting
         const pendingId = localStorage.getItem('pendingInvoiceId');

         if (pendingId) {
             // 2. Call Backend to Update Database
             try {
                 const payload = {
                    paymentMethod: 'Stripe/Online',
                    paymentDate: new Date().toISOString()
                 };

                 await fetch(`${BASE_API_URL}/Financial/pay/${pendingId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                 });

                 toast.success("Payment successful! Database updated.");
                 fetchInvoices(); // Refresh list
             } catch (err) {
                 console.error(err);
                 toast.error("Payment received, but failed to update status.");
             } finally {
                 // 3. Cleanup
                 localStorage.removeItem('pendingInvoiceId');
                 // Remove query params from URL to prevent re-running on refresh
                 window.history.replaceState(null, "", window.location.pathname);
             }
         }
      }
    });
  }, [fetchInvoices]);

  // 2. Handle "Pay Now" Click -> Get Stripe Secret
  const handleInitiatePayment = async (invoice) => {
    localStorage.setItem('pendingInvoiceId', invoice.id);
    setSelectedInvoice(invoice);
    setIsPaymentDialogOpen(true);
    setClientSecret(null);
    setPreparingPayment(true);

    try {
      // Call your C# PaymentsController to get the intent secret
      const response = await axios.post(`${BASE_API_URL}/payments/create-payment-intent`, {
        amount: invoice.amount
      });

      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error("Stripe initialization failed:", error);
      toast.error("Could not initialize secure payment system.");
      setIsPaymentDialogOpen(false);
    } finally {
      setPreparingPayment(false);
    }
  };

  // 3. Handle Success from Stripe CheckoutForm
  const handleStripeSuccess = async () => {
    if (!selectedInvoice) return;

    // [LOGIC] Payment is confirmed by Stripe. Now update the database status.
    try {
      const payload = {
        paymentMethod: 'Stripe/Card',
        paymentDate: new Date().toISOString()
      };

      const response = await fetch(`${BASE_API_URL}/Financial/pay/${selectedInvoice.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Database update failed.');

      toast.success('Payment successful and recorded!');

      // Clear storage just in case
      localStorage.removeItem('pendingInvoiceId');

      // Close Dialog and Refresh
      setIsPaymentDialogOpen(false);
      fetchInvoices();

    } catch (error) {
      // Note: Payment money was already taken by Stripe at this point,
      // but the DB update failed. In a real app, you'd handle this mismatch.
      console.error(error);
      toast.error('Payment received, but system record update failed. Please contact admin.');
    }
  };

  // Derived State for UI
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
                        Paid on: {invoice.paymentDate ? new Date(invoice.paymentDate).toLocaleDateString() : 'N/A'}
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

      {/* Stripe Payment Dialog */}
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
            // 1. Wrap with Stripe Elements using the secret
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              {/* 2. Render the CheckoutForm and pass the success handler */}
              <CheckoutForm
                amount={selectedInvoice?.amount}
                onSuccess={handleStripeSuccess}
              />
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