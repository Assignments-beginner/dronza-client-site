import React from "react";
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = ({ payment }) => {
  const { paymentPrice, _id, userName } = payment;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(
      "https://morning-badlands-81993.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ paymentPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [paymentPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    //Payment Intent
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setSuccess("");
    } else {
      setCardError("");
      setSuccess("Your payment processed successfully.");
      console.log(paymentIntent);
      setProcessing(false);
      // Save To Database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://morning-badlands-81993.herokuapp.com/allorders/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container>
          <CardElement
            className="mt-4"
            options={{
              style: {
                base: {
                  fontSize: "25px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />

          <Button
            variant="danger fs-5 w-25 mt-4"
            type="submit"
            disabled={!stripe}
          >
            Pay&nbsp; ${paymentPrice}
          </Button>
        </Container>
      </form>
      {cardError && <p className="text-center text-danger">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
