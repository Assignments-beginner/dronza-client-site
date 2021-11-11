import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className="my-5 text-center text-dark text-uppercase">
        Users ( {users.length} )
      </h1>
      <Container>
        <Row className="border border-danger">
          {users.map((user) => (
            <Col key={user._id} users={user}>
              {" "}
              <p className="text-dark text-center text-uppercase">
                {user.email}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Reviews></Reviews>     

    </div>
  );
};

export default Home;
