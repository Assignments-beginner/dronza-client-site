import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import Rating from "react-rating";
import "../Reviews/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 688,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 100,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <div className="mt-5 res-review-bottom">
        <h2 className="pt-5 res-client-top mb-3 text-center text-dark text-uppercase">
          our beloved <span className="text-danger">clients</span>
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
              <div>
                <Rating
                  initialRating={review.userRating}
                  readonly
                  emptySymbol="far fa-star text-danger"
                  fullSymbol="fas fa-star text-danger"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Reviews;
