import React from "react";
import blackdrone from "../../../../../Images/blackdrone.png";
import "./Drone.css";

const Drone = () => {
  return (
    <div>
      {/* Drone  */}
      <div className="position-relative">
        <div className="object position-absolute">
          <img src={blackdrone} alt="" />
        </div>
      </div>
      {/* Drone  */}
    </div>
  );
};

export default Drone;
