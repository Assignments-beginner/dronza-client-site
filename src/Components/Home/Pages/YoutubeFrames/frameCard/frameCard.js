import React from "react";

const FrameCard = ({ videos, cardIndex }) => {
  return (
    <div>
      {videos[cardIndex]?.map((video) => (
        <div className="border border-danger">
          <p>{video.title}</p>
          <p>{video.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FrameCard;
