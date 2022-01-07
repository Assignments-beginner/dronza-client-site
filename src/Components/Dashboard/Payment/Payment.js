import React from "react";
import { useEffect, useState } from "react";
import "./Payment.css";
import { useParams } from "react-router";
import { Button, Col, Container, Row } from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KFEd9KfCopy2uC1NBKe6ARONeORVuOFfjauyZI4SaO0xzfmAUYyhF8Vgyx2EVgNkg9TGLOVgB1qEfMe27MFoRcG00XYEcE6dU"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState({});

  useEffect(() => {
    fetch(`https://morning-badlands-81993.herokuapp.com/allorders/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [paymentId]);
  return (
    <>
      <h3 className="dashboard-sectionTitle text-center text-dark mb-3 text-uppercase">
        Payment
      </h3>
      <Container className="payment-frame mb-5 pt-3">
        <Row>
          {/* Name  */}
          <Col>
            {" "}
            <span className="label text-center">Name</span>
            {payment.userName}
          </Col>
          {/* Product  */}
          <Col>
            {" "}
            <span className="label text-center">Product</span>{" "}
            {payment.singleProductName}
          </Col>
        </Row>
        <Row>
          {/* Model  */}
          <Col>
            {" "}
            <span className="label text-center">Model</span>
            {payment.singleProductModel}
          </Col>
          {/* Price  */}
          <Col>
            {" "}
            <span className="label text-center">Price</span>$
            {payment.paymentPrice}
          </Col>
        </Row>
        {payment?.paymentPrice && (
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} />
          </Elements>
        )}
      </Container>
    </>
  );
};

export default Payment;
