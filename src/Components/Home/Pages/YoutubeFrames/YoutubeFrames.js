import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FrameCard from "../YoutubeFrames/FrameCard/FrameCard";

const YoutubeFrames = () => {
  const [videos, setvideos] = useState([]);
  const [active, setActive] = useState("firstCard");

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setvideos(data));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div className="pt-5">
      <h2 className="text-center text-dark text-uppercase mb-3">
        Check Out <span className="text-danger">accessories</span> Update
      </h2>
      <p className="text-uppercase text-center">under construction</p>
      <div className="d-flex justify-content-center border border-danger p-5">
        <div className="d-flex align-items-center">
          <div className="p-4">
            <Button
              onClick={() => setActive("firstCard")}
              variant="outline-danger m-2"
            >
              Click1
            </Button>
            <br />
            <Button
              onClick={() => setActive("secondCard")}
              variant="outline-danger m-2"
            >
              Click2
            </Button>
            <br />
            <Button
              onClick={() => setActive("thirdCard")}
              variant="outline-danger m-2"
            >
              Click3
            </Button>
          </div>
          <div className="p-4">
            {active === "firstCard" && (
              <FrameCard videos={videos} cardIndex={0} />
            )}
            {active === "secondCard" && (
              <FrameCard videos={videos} cardIndex={1} />
            )}
            {active === "thirdCard" && (
              <FrameCard videos={videos} cardIndex={2} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeFrames;
