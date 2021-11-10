import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const Home = () => {
  const [users, setUsers] = useState([]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

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
      <Container>
        <div className="py-5 my-5">
          <h2 className="my-5 text-center text-dark text-uppercase">React Slick</h2>
          <Slider {...settings}>
          {users.map((user) => (
            <div key={user._id} users={user}>
              {" "}
              <p className="text-dark text-center text-uppercase">
                {user.email}
              </p>
            </div>
          ))}            
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Home;
