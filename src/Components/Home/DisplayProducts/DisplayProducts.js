import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./DisplayProducts.css";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "linear",
  };

  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="mt-5">
      <h2 className="text-center text-dark text-uppercase">
        our top <span className="text-danger">products</span>
      </h2>
      <div>
        <Slider {...settings}>
          {/* Dynamic Data */}
          {products.map((product) => (
            <div className="p-5" key={product._id} product={product}>
              {/* Display Product Content Start  */}

              {/* Images  */}
              <div>
                <img
                  style={{
                    borderWidth: "5px",
                    borderStyle: "solid",
                    borderImage: "linear-gradient(45deg, #d9534f, #4d0000) 1",
                  }}
                  width="340"
                  height="230"
                  className="p-2"
                  src={product.productImg}
                  alt=""
                />
              </div>

              {/* Details Box */}
              <div className="d-flex justify-content-end">
                <div className="p-3 shadow details-box bg-white">
                  <strong className="text-danger">{product.productName}</strong>
                  <br />
                  <span>{product.productModel}</span>
                  <br />
                  <strong className="fs-5">{product.productPrice}</strong>
                </div>
              </div>

              {/* Display Product Content End  */}
            </div>
          ))}
          {/* Dynamic Data */}
        </Slider>
      </div>
    </Container>
  );
};

export default DisplayProducts;
