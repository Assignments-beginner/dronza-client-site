import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import dronza from "../../Images/dronza.png";

const Footer = () => {
  return (
    <div className="main-footer w-100 bg-dark p-4">
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          <img width="100" height="50" src={dronza} alt="" />
        </div>
        <div>
          <span className="text-white">
            Copyright &copy; 2021 All Rights Reserved{" "}
          </span>
        </div>
        <div className="social-media d-flex justify-content-center fs-4">
          <a
            href="https://www.facebook.com/groups/572432650739990"
            target="_blank"
          >
            <i className="fab fa-facebook-square text-white px-1"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=jgKNqHWC9M4&ab_channel=YTTECHNOTECHGURUJI"
            target="_blank"
          >
            <i className="fab fa-youtube-square text-white px-1"></i>
          </a>
          <a href="https://twitter.com/DroneRaceLeague" target="_blank">
            <i className="fab fa-twitter-square text-white px-1"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
