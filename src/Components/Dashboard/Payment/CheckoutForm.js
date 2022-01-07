import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Container } from "react-bootstrap";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    e.preventDefault();
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
            Pay
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default CheckoutForm;
