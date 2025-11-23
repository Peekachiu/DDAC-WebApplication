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
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href,  // Redirect back to this page after payment
        },
        redirect: "always",  // 🔥 Force redirect for ALL payment methods (Card, FPX, Grabpay)
      });

      // Stripe will redirect BEFORE this runs if redirect is required

      if (error) {
        setErrorMessage(error.message);
        toast.error(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment Successful!");
        onSuccess(paymentIntent); // Pass the payment intent back
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred.");
      toast.error("Unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <PaymentElement />

      {errorMessage && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
          {errorMessage}
        </div>
      )}

      <Button disabled={!stripe || isLoading} className="w-full">
        {isLoading ? <Loader2 className="animate-spin mr-2" /> : `Pay RM ${amount}`}
      </Button>
    </form>
  );
}
