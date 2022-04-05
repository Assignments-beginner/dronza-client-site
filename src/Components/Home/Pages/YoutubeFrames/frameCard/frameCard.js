import React from "react";
import { Card } from "react-bootstrap";
import java from "../../../../../Images/frame1.gif";

const FrameCard = ({ videos, cardIndex }) => {
  return (
    <div>
      {videos[cardIndex]?.map((video) => (
        <Card>
          <Card.Img style={{ width: "100%" }} src={java} />
          <Card.Title className="text-center uppercase py-4">
            Feel Free To Visit Our Channel
          </Card.Title>
        </Card>
      ))}
    </div>
  );
};

export default FrameCard;
