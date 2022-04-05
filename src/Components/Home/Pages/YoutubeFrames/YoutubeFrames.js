import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FrameCard from "../YoutubeFrames/FrameCard/FrameCard";
import accDrone1 from "../../../../Images/accDrone1.jpg";
import accDrone2 from "../../../../Images/accDrone2.jpg";
import accDrone3 from "../../../../Images/accDrone3.jpg";

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
    <Container className="pt-5">
      <h2 className="text-center text-dark text-uppercase mb-3">
        Check Out <span className="text-danger">accessories</span> Update
      </h2>
      <Row className="border border-danger">
        <Col className="m-4 border border-danger">
          <Link
            to=""
            className="text-decoration-none text-dark"
            onClick={() => setActive("firstCard")}
          >
            <Card className="flex-row align-items-center mb-4">
              <Card.Img
                style={{ width: "175px", height: "135px" }}
                src={accDrone1}
              />
              <Card.Body>
                <Card.Text>12/04/2021</Card.Text>
                <Card.Title>Smooth Flexible Rotation</Card.Title>
                <Card.Text>
                  <i class="fas fa-camera text-danger"></i> &nbsp;Motion Camera
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link
            to=""
            className="text-decoration-none text-dark"
            onClick={() => setActive("secondCard")}
          >
            <Card className="flex-row align-items-center mb-4">
              <Card.Img
                style={{ width: "175px", height: "135px" }}
                src={accDrone2}
              />
              <Card.Body>
                <Card.Text>12/02/2022</Card.Text>
                <Card.Title>Full Quality Performance</Card.Title>
                <Card.Text>
                  <i className="fas fa-cog text-danger"></i> &nbsp;Best
                  Accessories
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link
            to=""
            className="text-decoration-none text-dark"
            onClick={() => setActive("thirdCard")}
          >
            <Card className="flex-row align-items-center">
              <Card.Img
                style={{ width: "175px", height: "135px" }}
                src={accDrone3}
              />
              <Card.Body>
                <Card.Text>02/04/2022</Card.Text>
                <Card.Title>On Long Distance Range</Card.Title>
                <Card.Text>
                  <i class="fas fa-map-marker-alt text-danger"></i>{" "}
                  &nbsp;Location Track
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className="m-4 border border-danger d-flex align-items-center">
          {active === "firstCard" && (
            <FrameCard videos={videos} cardIndex={0} />
          )}
          {active === "secondCard" && (
            <FrameCard videos={videos} cardIndex={1} />
          )}
          {active === "thirdCard" && (
            <FrameCard videos={videos} cardIndex={2} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default YoutubeFrames;
