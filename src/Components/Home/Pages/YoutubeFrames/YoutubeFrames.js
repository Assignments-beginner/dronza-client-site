import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const YoutubeFrames = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
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
            <Button variant="outline-danger m-2">Click1</Button>
            <br />
            <Button variant="outline-danger m-2">Click2</Button>
            <br />
            <Button variant="outline-danger m-2">Click3</Button>
          </div>
          <div className="p-4">
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeFrames;
