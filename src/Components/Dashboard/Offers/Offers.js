import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Offers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container className="mb-5 pb-3">
      <div>
        <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
          Limited <span className="text-danger">Offers</span>
        </h3>
      </div>
      <Row className="g-4">
        {products.slice(0, 6).map((product) => (
          <Col key={product._id} xl={6} lg={6} sm={12}>
            <Card className="shadow-sm flex-row align-items-center px-2">
              <Card.Img
                style={{ width: "135px", height: "95px" }}
                src={product.productImg}
              />
              <Card.Body className="text-center">
                <strong className="text-danger">{product.productName}</strong>
                <br />
                <span>Now Only</span>&nbsp;
                <span className="text-danger fs-5">
                  <s>$3299</s>
                </span>
                &nbsp;
                <strong>{product.productPrice}</strong>
                <br />
                <Link
                  to={`/singleproduct/${product._id}`}
                  className="text-danger text-decoration-none"
                  style={{ fontSize: "12px" }}
                >
                  Order Now
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
