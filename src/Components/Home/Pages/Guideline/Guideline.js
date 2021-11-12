import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import Drone from "./Drone/Drone";
import "./Guideline.css";

const Guideline = () => {
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-center text-dark text-uppercase mb-5">
        smart <span className="text-danger">guidance</span>
      </h2>
      <div className="text-center">
          <h4 className="text-uppercase">How it works</h4>
          <p>
            Drone controller basically works by sending a radio signal from the
            remote control to the drone, which tells the drone what to do. Radio
            signals are sent from the radio transmitter in the drone controller
            and received by the drone's receiver
          </p>
        </div>
      <Container>
        <div className="m-5 w-25 d-flex justify-content-center">
          <Drone></Drone>
        </div> 

        <div className="how">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
};

export default Guideline;
