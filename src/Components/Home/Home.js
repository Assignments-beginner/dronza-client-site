import React from "react";
import { Carousel } from "react-bootstrap";
import Reviews from "./Reviews/Reviews";
import slide1 from "../../Images/slide1.png";
import slide2 from "../../Images/slide2.png";
import slide3 from "../../Images/slide3.png";
import DisplayProducts from "./DisplayProducts/DisplayProducts";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="positioting">
            <h1 className="text-uppercase text-start text-white">
              <span className="text-danger tiny-shadow">Ultraportable</span> <br /> <span className="tiny-shadow">Drones
              For Great Videos</span>
            </h1>
            <p className="text-uppercase text-start text-white">
              check out our guidelines
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption className="positioting">
            <h1 className="text-uppercase text-start text-white header">
              <span className="text-danger">phenomenal</span> <br />battery backup
            </h1>
            <p className="text-uppercase text-start text-white">
              check out our guidelines
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption className="positioting">
            <h1 className="text-uppercase text-start text-white">
              <span className="text-danger">superfast</span> <br /> <span className="tiny-shadow">with great range</span>
            </h1>
            <p className="text-uppercase text-start text-white">
              check out our guidelines
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <DisplayProducts></DisplayProducts>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
