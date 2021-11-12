import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import drone from '../../../../Images/drone.png'

const About = () => {
  return (
    <div className="my-5">
      <h2 className="text-center text-dark text-uppercase mb-5">
        <span className="text-danger">About</span>
      </h2>
      <Container>
        <div className="drone-div">
          <div className="object">
              <img src={drone} alt="" />
          </div>
          <div className="hd-div">
              <h1 className="hd">4K HD</h1>
              <h2 className="text-center">RESOLUTION</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
