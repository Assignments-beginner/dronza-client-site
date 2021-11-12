import React from "react";
import { Container } from "react-bootstrap";
import map from '../../../../Images/location.jpg'

const Contact = () => {
  return (
    <div className="mt-5 pt-5">
      <h2 className="text-center text-dark text-uppercase mb-5">
        contact <span className="text-danger">us</span>
      </h2>
      <div style={{ backgroundColor: "#F6F6F6" }} className="main-footer w-100">
        <Container className="d-flex align-items-center justify-content-between py-4">
          {/* ////////////////////// Connect With Us ////////////////////// */}
          <div className="text-center d-grid">
            <strong className="text-dark text-uppercase">CONTACT Us</strong>
            <span className="mb-3">We are open Friday to Wednesday</span>
            <span>
              <i class="fas fa-phone text-danger"></i> +1 209-507-5152
            </span>
            <span>
              <i class="fas fa-envelope text-danger"></i>&nbsp;&nbsp;dronza@gmail.com
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
            <strong style={{ color: "#0B114A" }}>ADDRESS</strong>

            <span>California St, Stockton, United States</span>

            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
