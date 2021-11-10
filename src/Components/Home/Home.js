import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className="my-5 text-center text-dark">Users : {users.length}</h1>
      <Container>
        <Row>
          {users.map((user) => (
            <Col key={user._id} users={user}>
              {" "}
              <p className="text-dark">{user.email}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
