import React from "react";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <h1 className="my-5 text-center text-dark text-uppercase">
        Welcome To Drone Zone
      </h1>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
