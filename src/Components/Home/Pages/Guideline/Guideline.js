import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./Guideline.css";
import battery from "../../../../Images/battery.png";
import dronefly from "../../../../Images/dronefly.png";
import controller from "../../../../Images/controller.png";
import camera from "../../../../Images/camera.png";

const Guideline = () => {
  return (
    <div className="mb-5 mt-3">
      <h2 className="text-center text-dark text-uppercase mb-5 pt-5">
        smart <span className="text-danger">guidance</span>
      </h2>
      <div className="how-description text-center px-5">
        <h3 className="how-title text-uppercase">How it works</h3>
        <p className="res-how text-white">
          Drone controller basically works by sending a radio signal from the
          remote control to the drone, which tells the drone what to do.
        </p>
        <p className="how text-white">
          Drone controller basically works by sending a radio signal from the
          remote control to the drone, which tells the drone what to do. Radio
          signals are sent from the radio transmitter in the drone controller
          and received by the drone's receiver.
        </p>
      </div>
      <Container className="guideline-cards">
        <div>
          <CardGroup>
            <Card className="text-center">
              <div className="d-flex justify-content-center mt-3">
                <Card.Img
                  style={{ height: "70px", width: "70px" }}
                  src={controller}
                />
              </div>
              <Card.Body>
                <Card.Title>Controller</Card.Title>
                <Card.Text className="text-center">
                  Correctly connecting a drone to the controller ensures a
                  smooth flight of the drone as it goes about its job of
                  monitoring, performing inspections and other jobs.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong className="text-danger text-center">
                  How To Use Controller
                </strong>
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <div className="d-flex justify-content-center mt-3">
                <Card.Img
                  style={{ height: "70px", width: "70px" }}
                  src={dronefly}
                />
              </div>

              <Card.Body>
                <Card.Title>Flying</Card.Title>
                <Card.Text className="text-center">
                  Mount your electronic speed controllers. Attach the landing
                  gear. Connect LibrePilot to your drone. Take your drone for a
                  spin!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong className="text-danger text-center">
                  How To Fly Ready
                </strong>
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <div className="d-flex justify-content-center mt-3">
                <Card.Img
                  style={{ height: "70px", width: "70px" }}
                  src={camera}
                />
              </div>
              <Card.Body>
                <Card.Title>Camera</Card.Title>
                <Card.Text className="text-center">
                  For distances between the camera and the scene center shorter
                  than 120 meters, FULL HD (1920x1200) resolution will be
                  sufficient, but it is better to use a higher resolution
                  (2k/4k).
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong className="text-danger text-center">
                  How To Record Video
                </strong>
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <div className="d-flex justify-content-center mt-3">
                <Card.Img
                  style={{ height: "70px", width: "70px" }}
                  src={battery}
                />
              </div>

              <Card.Body>
                <Card.Title>Battery</Card.Title>
                <Card.Text className="text-center">
                  It comes with a USB cable that you can plug into your computer
                  USB port to charge it or you can use a USB wall charger.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong className="text-danger text-center">
                  How To Charge Battery
                </strong>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
};

export default Guideline;
