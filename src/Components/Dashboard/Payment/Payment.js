import React from "react";

const Payment = () => {
  return (
    <div>
      <h3 className="text-center text-dark mb-3 text-uppercase">
        <span className="text-danger">Payment</span>
      </h3>
      <p className="text-uppercase text-center">choose your payment method</p>
      <div style={{fontSize:'100px'}} className="text-center">
        <div>
          <i class="fab fa-cc-visa text-danger p-2"></i>
          <i class="fab fa-google-pay text-danger p-2"></i>
          <i className="fab fa-cc-mastercard text-danger p-2"></i>
        </div>

        <div>
          <i class="fab fa-cc-paypal text-danger p-2"></i>
          <i class="fab fa-cc-amazon-pay text-danger p-2"></i>
          <i className="fab fa-cc-stripe text-danger text-danger p-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Payment;
