import React from "react";
import { useEffect, useState } from "react";
import "./Payment.css";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
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
      <h3 className="dashboard-sectionTitle text-center text-dark my-4 text-uppercase">
        Payment <span className="text-danger">Gateway</span>
      </h3>
      <div className="payment-frame mb-5">
        <div className="mx-auto orderInfo mt-4">
          <Row className="orderInfo-row">
            {/* Product  */}
            <Col>
              {" "}
              <span className="label text-center">Product</span>
              {payment.singleProductName}
            </Col>
            {/* Model  */}
            <Col>
              {" "}
              <span className="label text-center">Model</span>
              {payment.singleProductModel}
            </Col>
          </Row>
          <Row className="orderInfo-row">
            {/* Status  */}
            <Col>
              <span className="label text-center">Status</span>
              {payment.bookedproductStatus}
            </Col>
            {/* Price  */}
            <Col>
              {" "}
              <span className="label text-center">Price</span>$
              {payment.paymentPrice}
            </Col>
          </Row>
        </div>
        <h5 className="text-center mt-4 text-uppercase">{payment.userName}</h5>
        {payment?.paymentPrice && (
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Payment;
