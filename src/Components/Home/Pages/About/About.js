import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import drone from "../../../../Images/drone.png";

const About = () => {
  return (
    <div className="mt-5 mb-5 pb-5">
      <h2 className="text-center text-dark text-uppercase">
        about <span className="text-danger">us</span>
      </h2>
      <Container className="d-flex align-items-center mt-5">
        {/* Drone Animation  */}
        <div className="drone-div">
          <div className="object">
            <img src={drone} alt="" />
          </div>
          <div className="hd-div">
            <h1 className="hd">4K HD</h1>
            <h2 className="text-center">RESOLUTION !</h2>
          </div>
        </div>
        {/* Drone Animation  */}
        {/* About Description */}
        <div className="mx-5 px-5 w-50">
          <h2 className="text-uppercase">
            Specializing in <br /> Drone Services <br /> and Aerial Photography
          </h2>

          <p className="text-justify mt-4">
            We have a professional drone production and manufacturing base of
            13,000 square meters, with a complete drone production chain from
            product design, mold manufacturing, processing to product assembly,
            and has built a solid manufacturing foundation for the research and
            development of drones. The output capacity reaches one million
            units.
          </p>
          {/* Controls  */}
          <div className="mt-5">
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-mobile-alt text-danger fs-1 me-2"></i>{" "}
              <span className="text-danger fs-5">
                Mobile Device Supported
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-gamepad text-danger fs-1 me-2"></i>{" "}
              <span className="text-danger fs-5">
              Easy integrative control
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-headset text-danger fs-1 me-2"></i>{" "}
              <span className="text-danger fs-5">
              Customized Commands
              </span>
            </div>
          </div>
          {/* Controls  */}
        </div>
        {/* About Description */}
      </Container>
    </div>
  );
};

export default About;
