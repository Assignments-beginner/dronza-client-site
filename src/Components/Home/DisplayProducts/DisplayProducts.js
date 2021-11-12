import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

const DisplayProducts = () => {
  const [reviews, setReviews] = useState([]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="border border-dark">
      <div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="text-center p-5" key={review._id} review={review}>
              <div className="d-flex justify-content-center">
                <img
                  width="100"
                  height="100"
                  className="rounded-circle mb-4 shadow border border-white"
                  src={review.userImg}
                  alt=""
                />
              </div>
              <div>
                <strong>{review.userName}</strong>
                <p>{review.userReview}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default DisplayProducts;
