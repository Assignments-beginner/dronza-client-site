import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      // style={{ backgroundColor: "whiteSmoke" }}
      className="main-footer w-100 bg-dark"
    >
      <Container className="d-flex align-items-center justify-content-between py-4">
        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center d-grid">
          <p>
            <strong className="text-white text-uppercase">follow Us</strong>
          </p>
          <p className="text-white">Feel Free - Like, Share and Subscribe</p>
          <div className="social-media d-flex justify-content-center fs-4">
            <a
              href="#"
              target="_blank"
            >
              <i
                style={{ color: "#3b5998" }}
                className="fab fa-facebook px-2"
              ></i>
            </a>
            <a
              href="#"
              target="_blank"
            >
              <i
                style={{ color: "#ea3c23" }}
                className="fab fa-youtube px-2"
              ></i>
            </a>
            <a href="#">
              <i
                style={{ color: "#1DA1F2" }}
                className="fab fa-twitter px-2"
              ></i>
            </a>
          </div>
        </div>

        {/* ////////////////////// Open Hours ////////////////////// */}
        <div className="text-center mt-2">
          <p className="text-white text-uppercase">
            <strong>pay from anywhere</strong>
          </p>

          <div>
            <i class="fab fa-cc-visa text-white fs-1 p-2"></i>
            <i class="fab fa-google-pay text-white fs-1 p-2"></i>
            <i className="fab fa-cc-mastercard text-white fs-1 p-2"></i>
          </div>

          <div>
            <i class="fab fa-cc-paypal text-white fs-1 p-2"></i>
            <i class="fab fa-cc-amazon-pay text-white fs-1 p-2"></i>
            <i className="fab fa-cc-stripe text-white fs-1 text-white fs-1 p-2"></i>
          </div>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid">
          <p>
            <strong className="text-white">ADDRESS</strong>
          </p>

          <p className="text-white">California St, Stockton, United States</p>

          <p className="text-white">
            {" "}
            <i style={{ color: "#ea3c23" }} className="fas fa-phone"></i> +1
            209-507-5152
          </p>
        </div>
      </Container>
      <hr class="new" />
      <div className="w-100 py-3 bg-dark">
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid justify-content-center">
          <Container>
            <span className="text-white">
              <span className="d-block text-center text-uppercase fs-5">
                {" "}
                <strong style={{ color: "#EA3C23" }}>trip</strong> toe{" "}
              </span>{" "}
              Copyright &copy; 2021 All Rights Reserved{" "}
            </span>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
