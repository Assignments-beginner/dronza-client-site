import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePrograms = (props) => {
  const { id, serviceImg, serviceTitle, heading } = props.program;
  return (
    <Col className="d-flex align-items-stretch pb-5" xs={12} xl={4} lg={4}>
      <Card
        style={{ border: "none", borderRadius: "15px" }}
        className="shadow p-3"
      >
        <div className="text-center">
          <img
            className="
              rounded-circle
              mt-2
              border border-5 border-white
              shadow-sm
              "
            height="200"
            width="200"
            src={serviceImg}
            alt=""
          />
        </div>
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title style={{ color: "#0B114A" }}>{serviceTitle}</Card.Title>
          <Card.Text style={{ color: "#0b114a" }}>{heading}</Card.Text>

          <Link to={`/services/${id}`} className="mt-auto">
            <Button className="px-4" variant="primary">
              Enroll
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomePrograms;
