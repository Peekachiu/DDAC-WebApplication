'use client';
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/app/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CheckoutForm({ amount, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      // 🚀 Attempt to confirm the payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href, // For FPX / GrabPay Redirect
        },
        redirect: "if_required", // Card won't redirect, FPX / GrabPay will
      });

      if (error) {
        setErrorMessage(error.message);
        toast.error(error.message);
      }

      // --- Card Payments Flow (no redirect) ---
      else if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment Successful!");

        // 🔥 Retrieve EXPANDED PaymentIntent (so charges + payment_method_details are available)
        const expanded = await stripe.retrievePaymentIntent(
          paymentIntent.client_secret,
          {
            expand: ["charges.data.payment_method_details"]
          }
        );

        // 👉 Pass back the fully expanded PI
        onSuccess(expanded.paymentIntent);
      }

      // --- FPX / GrabPay Flow ---
      // For FPX/GrabPay this function does nothing here, redirect happens.
      else if (paymentIntent && paymentIntent.status === "requires_action") {
        // Do nothing — redirect will happen automatically
      }

    } catch (err) {
      console.error(err);
      setErrorMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <PaymentElement />

      {errorMessage && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">{errorMessage}</div>
      )}

      <Button disabled={!stripe || isLoading} className="w-full">
        {isLoading ? <Loader2 className="animate-spin mr-2" /> : `Pay RM ${amount}`}
      </Button>
    </form>
  );
}