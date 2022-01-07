import React from "react";
import "./Payment.css";
import { useParams } from "react-router";
import { Button, Col, Container, Row } from "react-bootstrap";
const Payment = () => {
  const { paymentId } = useParams();
  return (
    <>
      <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
        Payment
      </h3>
      <Container className="payment-frame mb-5 p-5">
        <Row>
          {/* Name  */}
          <Col>
            {" "}
            <span className="label text-center">Name</span>{" "}
          </Col>
          {/* Product  */}
          <Col>
            {" "}
            <span className="label text-center">Product</span>{" "}
          </Col>
        </Row>
        <Row>
          {/* Model  */}
          <Col>
            {" "}
            <span className="label text-center">Model</span>{" "}
          </Col>
          {/* Price  */}
          <Col>
            {" "}
            <span className="label text-center">Price</span>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
