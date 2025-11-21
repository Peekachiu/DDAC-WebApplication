'use client';
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/app/components/ui/button'; // Adjust path if needed
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
          return_url: window.location.href, // Redirect here after payment
        },
        redirect: "if_required", // Avoid redirect if not necessary (like for cards)
      });

      if (error) {
        setErrorMessage(error.message);
        toast.error(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment Successful!");
        onSuccess(); // Close modal or update UI
      }
    } catch (err) {
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