import React from "react";
import { Button, Carousel, FormControl, InputGroup } from "react-bootstrap";
import Reviews from "./Reviews/Reviews";
import slide1 from "../../Images/slide1.png";
import slide2 from "../../Images/slide2.png";
import slide3 from "../../Images/slide3.png";
import DisplayProducts from "./DisplayProducts/DisplayProducts";
import { Link } from "react-router-dom";
import "./Home.css";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Guideline from "./Pages/Guideline/Guideline";

const Home = () => {
  return (
    <div id="home">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="positioting">
            <h1 className="text-uppercase text-start text-white header">
              <span style={{ color: "#b91a1a" }} className="tiny-shadow">
                Ultraportable
              </span>{" "}
              <br /> <span className="tiny-shadow">with Great camera</span>
            </h1>
            <p className="text-uppercase text-start text-white res-order-title">
              order your favourite drones now
            </p>

            <Link to="/products">
              <div className="text-start">
                <button className="h-btn text-uppercase">check here</button>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption className="positioting">
            <h1 className="text-uppercase text-start text-white header">
              <span style={{ color: "#b91a1a" }}>phenomenal</span> <br />
              battery backup
            </h1>
            <p className="text-uppercase text-start text-white res-order-title">
              order your favourite drones now
            </p>
            <Link to="/products">
              <div className="text-start">
                <button className="h-btn text-uppercase">check here</button>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption className="positioting">
            <h1 className="text-uppercase text-start text-white header">
              <span style={{ color: "#b91a1a" }}>superfast</span> <br />{" "}
              <span className="tiny-shadow">with great range</span>
            </h1>
            <p className="text-uppercase text-start text-white res-order-title">
              order your favourite drones now
            </p>
            <Link to="/products">
              <div className="text-start">
                <button className="h-btn text-uppercase">check here</button>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <DisplayProducts></DisplayProducts>
      <Reviews></Reviews>

      {/* NewsLetter  */}
      <div
        style={{ borderRadius: "10px", backgroundColor: "#F6F6F6" }}
        className="res-newsletter mx-auto pb-4 pt-5 d-grid justify-content-center"
      >
        <div className="mb-4">
          <h5 className="text-dark text-uppercase text-center">
            Subscribe To Our Newsletter For{" "}
            <span className="text-danger">Latest Update</span>
          </h5>
        </div>
        <InputGroup className="pb-4">
          <FormControl
            placeholder="Enter Your Email"
            aria-label="Enter Your Email"
          />
          <Button
            className="text-uppercase"
            variant="danger px-4"
            id="button-addon2"
          >
            Subscribe
          </Button>
        </InputGroup>
      </div>
      {/* NewsLetter  */}
      <div id="about" className="d-flex justify-content-center">
        <span className="text-white pt-3">
          About-Hashlink
        </span>
      </div>

      <About></About>

      <Guideline></Guideline>

      <Contact></Contact>
    </div>
  );
};

export default Home;
