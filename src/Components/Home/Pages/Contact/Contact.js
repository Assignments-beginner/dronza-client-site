import React from "react";
import { Container } from "react-bootstrap";
import map from "../../../../Images/location.jpg";

const Contact = () => {
  return (
    <div id="contactus" className="pt-5">
      <h2 className="text-center text-dark text-uppercase mb-5">
        contact <span className="text-danger">us</span>
      </h2>
      {/* <div style={{ backgroundColor: "#F6F6F6" }} className="main-footer w-100"> */}
      <div className="main-footer w-100">
        <Container className="d-flex align-items-center justify-content-between py-4">
          {/* ////////////////////// Contact Us ////////////////////// */}
          <div className="text-center d-grid me-3">
            <strong className="text-dark text-uppercase">CONTACT Us</strong>
            <span className="mb-3">We are open Friday to Wednesday</span>
            <span>
              <i className="fas fa-phone text-danger"></i> +1 209-507-5152
            </span>
            <span>
              <i className="fas fa-envelope text-danger"></i>
              &nbsp;&nbsp;dronza@gmail.com
            </span>
          </div>

          {/* ////////////////////// Our Locations ////////////////////// */}
          <div className="text-center mt-2 mb-3">
            <p className="text-dark text-uppercase">
              <strong>Our Locations</strong>
            </p>
            <div>
              <img width="355" height="255" src={map} alt="" />
            </div>
          </div>

          {/*////////////////////// ADDRESS //////////////////////*/}
          <div className="text-center d-grid">
            <strong className="text-dark text-uppercase">address</strong>
            <span>2859 Wilkinson Street</span>
            <span>California St, Stockton, United States</span>

            <div className="mt-4">
              <i className="fas fa-truck text-danger"></i>&nbsp;&nbsp;
              <strong className="text-dark text-uppercase">Delivery</strong>
            </div>
            <span>Under City 1Week</span>
            <span>Under Province 2Weeks</span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
