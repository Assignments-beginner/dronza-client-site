import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import map from "../../../../Images/location.jpg";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div id="contactus" className="pt-5">
      <h2 className="text-center text-dark text-uppercase mb-5">
        contact <span className="text-danger">us</span>
      </h2>
      {/* <div style={{ backgroundColor: "#F6F6F6" }} className="main-footer w-100"> */}
      <div className="main-footer w-100">
        <Container className="py-4">
          <Row className="d-flex align-items-center justify-content-between">
            {/* ////////////////////// Contact Us ////////////////////// */}
            <Col className="text-center d-grid me-3">
              <strong className="text-dark text-uppercase">
                connect with us
              </strong>
              <span className="mb-3">We are open Friday to Wednesday</span>
              <span>
                <i className="fas fa-phone text-danger"></i> +1 209-507-5152
              </span>
              <span>
                <i className="fas fa-envelope text-danger"></i>
                &nbsp;&nbsp;dronza@gmail.com
              </span>
            </Col>

            {/* ////////////////////// Our Locations ////////////////////// */}
            <Col className="text-center mt-2 mb-3">
              <p className="text-dark text-uppercase">
                <strong>Our Branches</strong>
              </p>
              <div>
                <img
                  className="res-map"
                  width="355"
                  height="255"
                  src={map}
                  alt=""
                />
              </div>
            </Col>

            {/*////////////////////// ADDRESS //////////////////////*/}
            <Col className="text-center d-grid">
              <div>
                <strong className="text-dark text-uppercase">address</strong>{" "}
                <i class="fas fa-map-marker-alt text-danger"></i>
              </div>
              <span>2859 Wilkinson Street</span>
              <span>California St, Stockton, United States</span>
              <div className="mt-4">
                <strong className="text-dark text-uppercase">Delivery</strong>
                &nbsp;&nbsp;
                <i className="fas fa-truck text-danger"></i>
              </div>
              <span>Under City 1Week</span>
              <span>Under Province 2Weeks</span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
