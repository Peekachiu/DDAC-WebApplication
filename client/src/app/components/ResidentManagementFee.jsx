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
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const BASE_API_URL = 'http://localhost:5016/api';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

function ResidentManagementFee({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [preparingPayment, setPreparingPayment] = useState(false);
  const [activeTab, setActiveTab] = useState('pending');

  // 1. Fetch Invoices (Stable function)
  const fetchInvoices = useCallback(async () => {
    if (!user?.unit) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/Financial`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      // Filter: Match full unit string (e.g., "A-10-05")
      const myInvoices = data.filter(inv => {
        const fullUnit = `${inv.block}-${inv.floor}-${inv.unit}`;
        return fullUnit.toLowerCase() === user.unit.toLowerCase();
      });

      setInvoices(myInvoices);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error('Failed to load payment records.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // 2. Initial Fetch
  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  // 3. Update Status Function (Wrapped in useCallback to fix lint error)
  const updateInvoiceStatus = useCallback(async (invoiceId, paymentIntent) => {
    try {
      console.log("PaymentIntent received:", paymentIntent);

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

      // Refresh list to show "Paid" status immediately
      fetchInvoices();

    } catch (error) {
      console.error("DB Update Failed:", error);
      toast.error("Payment succeeded but database update failed.");
    }
  }, [fetchInvoices]); // Dependency ensures it stays up to date

  // 4. Handle Stripe Redirect Return (Uses updateInvoiceStatus)
  useEffect(() => {
    const clientSecretParam = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecretParam) return;

    stripePromise.then(async (stripe) => {
      if (!stripe) return;

      const piId = clientSecretParam.split("_secret")[0];

      try {
        const res = await fetch(`${BASE_API_URL}/payments/payment-intent/${piId}`);
        const paymentIntent = await res.json();

        if (paymentIntent && paymentIntent.status === "succeeded") {
          const pendingId = localStorage.getItem("pendingInvoiceId");

          if (pendingId) {
            await updateInvoiceStatus(pendingId, paymentIntent);
            localStorage.removeItem("pendingInvoiceId");
            // Clear URL params to prevent re-running on refresh
            window.history.replaceState(null, "", window.location.pathname);
          }
        }
      } catch (e) {
        console.error("Error verifying payment intent:", e);
      }
    });
  }, [updateInvoiceStatus]); // Fixed dependency

  // 5. Pay Now Button Logic
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

  // 6. Stripe Success Handler (for non-redirect flows)
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

      <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending">Pending Payments</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        {['pending', 'history'].map((tabValue) => (
          <TabsContent key={tabValue} value={tabValue}>
            <motion.div
              initial={{ x: tabValue === 'pending' ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {tabValue === 'pending' ? (
                pendingInvoices.length > 0 ? (
                  <Card className="glass !border-0">
                    <CardHeader>
                      <CardTitle>Pending Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {pendingInvoices.map((invoice) => (
                          <div
                            key={invoice.id}
                            className="flex items-center justify-between rounded-lg p-4 glass !border-0 hover:shadow-lg transition-all duration-300"
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
                              <p className="text-lg font-bold">RM {invoice.amount.toFixed(2)}</p>
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
                  <Card className="glass !border-0">
                    <CardContent className="p-6 text-center text-gray-500">
                      No pending payments. You are all caught up!
                    </CardContent>
                  </Card>
                )
              ) : (
                <Card className="glass !border-0">
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
                            className="flex items-center justify-between rounded-lg p-4 glass !border-0 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <div className="rounded-lg bg-green-50 p-3">
                                <DollarSign className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{invoice.month}</p>
                                <p className="text-xs text-gray-500">
                                  Paid on: {invoice.paidDate
                                    ? new Date(invoice.paidDate).toLocaleDateString()
                                    : 'N/A'}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="text-lg">RM {invoice.amount.toFixed(2)}</p>
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
              )}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Stripe Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        {/* [FIXED] Added max-h-[85vh] and overflow-y-auto to allow scrolling if content overflows */}
        <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Make Payment</DialogTitle>
            <DialogDescription>
              Securely pay RM {selectedInvoice?.amount.toFixed(2)} via Stripe
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