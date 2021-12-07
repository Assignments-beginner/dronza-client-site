import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./DisplayProducts.css";
import { Link } from "react-router-dom";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 688,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
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
          {products.slice(0, 6).map((product) => (
            <div
              className="border border-danger p-5"
              key={product._id}
              product={product}
            >
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
                  className="p-2 res-display-img"
                  src={product.productImg}
                  alt=""
                />
              </div>

              {/* Details Box */}
              <div className="d-flex justify-content-end">
                <div className="p-3 shadow details-box bg-white">
                  <strong className="text-danger text-uppercase">
                    {product.productName}
                  </strong>
                  <br />
                  <span>{product.productModel}</span>
                  <br />
                  <div className="d-flex align-items-center justify-content-between">
                    <strong className="fs-5">{product.productPrice}</strong>
                    <Link
                      style={{ fontSize: "12px" }}
                      className="text-decoration-none text-danger"
                      to={`/singleproduct/${product._id}`}
                    >
                      <button className="buy-btn">buy now</button>
                    </Link>
                  </div>
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
