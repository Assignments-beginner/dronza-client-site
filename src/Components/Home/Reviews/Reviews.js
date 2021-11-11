import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <div className="py-5 my-5">
        <h2 className="my-5 text-center text-dark text-uppercase">
          our beloved clients
        </h2>
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

export default Reviews;
