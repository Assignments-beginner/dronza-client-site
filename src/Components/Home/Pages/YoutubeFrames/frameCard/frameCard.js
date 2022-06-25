import React from "react";
import { Card } from "react-bootstrap";

const FrameCard = ({ videos, cardIndex }) => {
  return (
    // <div className="d-flex justify-content-center">
    <div>
      {videos[cardIndex]?.map((video) => (
        <Card>
          <Card.Img width={300} height={300} src={video.img} />
          <Card.Title className="text-uppercase text-center uppercase py-4">
            Feel Free To Visit Our&nbsp;
            <a
              href="https://www.youtube.com/c/Dji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <i className="fab fa-youtube text-danger"></i>
            </a>
            &nbsp;Channel
          </Card.Title>
        </Card>
      ))}
    </div>
  );
};

export default FrameCard;
