import React from "react";
import { Link } from "react-router-dom";

const Greetings = () => {
  return (
    <div className="text-center">
      <h2 className="p-5 text-uppercase text-dark">
        Thanks for the registration !
      </h2>
      <div>
        <i
          style={{ color: "#d9534f", fontSize: "150px" }}
          className="fas fa-heartbeat pb-4 mb-5"
        ></i>
      </div>
      <div className="pb-5">
          <h5 className="text-dark">Your account has been created just wait for the reload to autometic sign in. <br /> <br />Let's go to <Link style={{color: "#d9534f", textDecoration:'none'}} to="/home">HOME</Link> page.</h5>
      </div>
    </div>
  );
};

export default Greetings;
