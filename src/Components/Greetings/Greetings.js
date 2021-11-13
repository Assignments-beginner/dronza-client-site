import React from "react";
import { Link } from "react-router-dom";
import "./Greetings.css";
import littledrone from '../../Images/registration.png'

const Greetings = () => {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <h2 className="mt-5 text-uppercase text-dark">
        Thanks for the registration !
      </h2>
      <div className="drone-div">
        <div className="object border border-dark">
          <img width="310" height="180" src={littledrone} alt="" />
        </div>
      </div>
      <div className="pb-5">
        <h5 className="text-dark">
          Your account has been created just wait for the reload to autometic
          sign in. <br /> <br />
          Let's go to{" "}
          <Link style={{ color: "#d9534f", textDecoration: "none" }} to="/home">
            HOME
          </Link>{" "}
          page.
        </h5>
      </div>
    </div>
  );
};

export default Greetings;
