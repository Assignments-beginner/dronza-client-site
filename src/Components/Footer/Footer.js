import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "whiteSmoke" }}
      className="main-footer w-100"
    >
      <Container className="d-flex align-items-center justify-content-between py-4">
        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center d-grid">
          <strong >Connect With Us</strong>
          <span>Feel Free - Like, Share and Subscribe</span>
          <div className="d-flex justify-content-center fs-4">
            <a
              href="#"
              target="_blank"
            >
              <i className="fab fa-facebook px-2 text-dark"></i>
            </a>
            <a
              href="#"
              target="_blank"
            >
              <i className="fab fa-youtube px-2 text-dark"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter px-2 text-dark"></i>
            </a>
          </div>
        </div>

        {/* ////////////////////// Open Hours ////////////////////// */}
        <div className="text-center mt-2">
          <p >
            <strong>Open Hours</strong>
          </p>
          <p>Mon-Wed &nbsp; 8:00AM - 10:00PM</p>
          <p>Thurs-Fri &nbsp; 8:00AM - 10:00AM</p>
          <p >
            <strong>Emergency 24/7</strong>
          </p>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid">
          <strong >ADDRESS</strong>

          <span>California St, Stockton, United States</span>

          <span>
            {" "}
            <i  className="fas fa-phone"></i> +1
            209-507-5152
          </span>
        </div>
      </Container>
      <div className="bg-dark w-100 py-3">
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid justify-content-center">
          <Container>
            <span className="text-white">
              Copyright &copy; 2021 All Rights Reserved{" "}
            </span>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
