import React from "react";
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Container } from "react-bootstrap";

const CheckoutForm = ({ payment }) => {
  const { paymentPrice } = payment;
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

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
            Pay ${paymentPrice}
          </Button>
        </Container>
      </form>
      {
          cardError && <p className="text-center text-danger">{cardError}</p>
      }
    </div>
  );
};

export default CheckoutForm;
