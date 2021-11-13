import React from "react";
import { Link } from "react-router-dom";
import "./Greetings.css";
import littledrone from "../../Images/registration.png";

const Greetings = ({ backgroundColor = "#F7F7F7", children }) => {
  return (
    <div style={{ backgroundColor }} className="text-center d-flex flex-column justify-content-center align-items-center">
      <h2 className="mt-5 text-uppercase text-dark">
        Thanks for the <span className="text-danger">registration</span> !
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
          <div className="text-center">
            <Link className="text-decoration-none" to="/home">
              {" "}
              <span style={{ color: "#d9534f", fontSize: "20px" }}>
                Back To Home
              </span>{" "}
            </Link>
          </div>
        </h5>
      </div>
    </div>
  );
};

export default Greetings;
