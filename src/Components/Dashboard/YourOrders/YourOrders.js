import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./YourOrders.css";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://morning-badlands-81993.herokuapp.com/myorders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
    // .then((data) => console.log(data))
  }, [user.email]);

  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (proceed) {
      fetch(`https://morning-badlands-81993.herokuapp.com/myorders/${id}`, {
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
    <Container className="pb-5 mb-3">
      <div>
        <h3 className="dashboard-sectionTitle text-center text-uppercase">
          Your <span className="text-danger">orders</span>
        </h3>
      </div>
      <div>
        <h5 className="dashboard-orderTitle text-center text-dark mb-4 text-uppercase">
          total <strong className="text-danger">{orders.length}</strong> orders
        </h5>
      </div>
      <Row className="g-4">
        {orders.map((order) => (
          <Col key={order._id} xl={4} lg={4}>
            <Card className="shadow-sm">
              <Card.Img
                width="240"
                height="165"
                variant="top"
                src={order.singleProductImg}
                className="p-3"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  {" "}
                  <span className="text-danger">
                    {order.singleProductName}
                  </span>{" "}
                </Card.Title>
                <span className="fs-5">{order.singleProductPrice}</span>
                <Card.Text>
                  <span className="text-danger">BOOKED BY</span> <br />{" "}
                  <i className="fas fa-user"></i> {order.userName}
                </Card.Text>
                <div className="pay-delete">
                  {order.payment ? (
                    <Button variant="outline-success disabled" size="sm">
                      Paid
                    </Button>
                  ) : (
                    // <Link to={`dahboard/payment/:paymentId`}>
                    <Link to={`/payment/${order._id}`}>
                      <Button variant="outline-danger" size="sm">
                        Pay
                      </Button>
                    </Link>
                  )}
                  <Button
                    onClick={() => deleteHandler(order._id)}
                    variant="danger"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: "#e0e0eb" }}
                className="text-center"
              >
                <small className="text-muted">
                  {order.bookedproductStatus}
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
