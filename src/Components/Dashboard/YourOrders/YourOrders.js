import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    // .then((data) => console.log(data))
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== id);
            console.log(remainingOrders);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <Container className="mb-5 pb-5">
      <div>
        <h3 className="text-center text-uppercase mb-5">
          Your <strong style={{ color: "#ea3c23" }}>orders</strong>
        </h3>
      </div>
      <div>
        <p className="fs-4 text-center text-dark mb-5 text-uppercase">
          total <strong style={{ color: "#ea3c23" }}>{orders.length}</strong>{" "}
          orders
        </p>
      </div>
      <Row className="g-5">
        {orders.map((order) => (
          <Col key={order._id} xl={3} lg={3}>
            <Card>
              <Card.Img variant="top" src={order.singleServiceImg} />
              <Card.Body className="text-center">
                <Card.Title>
                  {" "}
                  <span style={{ color: "#ea3c23" }}>
                    {order.singleServiceName}
                  </span>{" "}
                </Card.Title>
                <span className="fs-3">{order.ButtonsingleServiceCost}</span>
                <Card.Text>
                  BOOKED BY <br /> <i className="fas fa-user"></i>{" "}
                  {order.userName}
                  <br />
                  <span className="text-danger">{order.userEmail}</span>
                </Card.Text>
                <Button
                  onClick={() => deleteHandler(order._id)}
                  className="text-center btn-danger px-4"
                  size="sm"
                >
                  Cancel
                </Button>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: "#e0e0eb" }}
                className="text-center"
              >
                <small className="text-muted">
                  {order.bookedServiceStatus}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default YourOrders;
