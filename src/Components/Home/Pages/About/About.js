import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import drone from "../../../../Images/drone.png";

const About = () => {
  return (
    <div className="mt-3">
      <h2 className="text-center text-dark text-uppercase pt-5">
        about <span className="text-danger">us</span>
      </h2>
      <Container className="mt-5">
        <Row>
          <Col
            className="d-flex justify-content-center mt-3"
            xl={6}
            lg={6}
            xs={12}
            sm={12}
          >
            {/* Drone Animation  */}
            <div className="drone-div">
              <div className="object">
                <img className="res-animated-drone" src={drone} alt="" />
              </div>
              <div className="hd-div">
                <h1 className="hd">4K HD</h1>
                <h2 className="text-center">RESOLUTION !</h2>
              </div>
            </div>
            {/* Drone Animation  */}
          </Col>
          <Col xl={6} lg={6} xs={12} sm={12}>
            {/* About Description */}
            <div className="mx-5">
              <h2 className="text-uppercase res-about-title">
                Specializing in <br /> Drone Services <br /> and Aerial
                Photography
              </h2>

              <p className="text-justify mt-4">
                We have a professional drone production and manufacturing base
                of 13,000 square meters, with a complete drone production chain
                from product design, mold manufacturing, processing to product
                assembly, and has built a solid manufacturing foundation for the
                research and development of drones. The output capacity reaches
                one million units.
              </p>
              {/* Controls  */}
              <div className="mt-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="res-feature-icons">
                    <i className="fas fa-mobile-alt text-danger fs-1 me-2"></i>{" "}
                  </div>
                  <span className="text-danger fs-5">
                    Mobile Device Supported
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="res-feature-icons">
                    <i className="fas fa-gamepad text-danger fs-1 me-2"></i>{" "}
                  </div>
                  <span className="text-danger fs-5">
                    Easy integrative control
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="res-feature-icons">
                    <i className="fas fa-headset text-danger fs-1 me-2"></i>{" "}
                  </div>
                  <span className="text-danger fs-5">Customized Commands</span>
                </div>
              </div>
              {/* Controls  */}
            </div>
            {/* About Description */}
          </Col>
        </Row>
        <div id="guideline" className="d-flex justify-content-center">
          <span  className="text-white pt-3">
            Guideline-Hashlink
          </span>
        </div>
      </Container>
    </div>
  );
};

export default About;
