import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://morning-badlands-81993.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="pb-5">
      <div>
        <h2 className="my-5 text-center text-dark text-uppercase">
          all <span className="text-danger">products</span>
        </h2>
      </div>
      <Container className="w-100 mb-5">
        <Row className="g-5">
          {products.map((product) => (
            <Col key={product._id} product={product} xl={4} lg={4}>
              <Card
                style={{
                  borderStyle: "none",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              >
                <Card.Img
                  style={{
                    borderWidth: "5px",
                    borderStyle: "solid",
                    borderImage: "linear-gradient(75deg, #d9534f, #4d0000) 1",
                  }}
                  width="340"
                  height="200"
                  variant="top"
                  className="p-3"
                  src={product.productImg}
                />
                <Card.Body className="p-4">
                  <Card.Text className="d-flex justify-content-between align-items-center">
                    {" "}
                    <div className="d-flex align-items-center">
                      <strong
                        className="text-danger text-uppercase"
                        style={{ fontSize: "18px" }}
                      >
                        {product.productName}
                      </strong>
                    </div>
                    <div className="text-center">
                      <span className="text-secondary">Model</span> <br />
                      <span>{product.productModel}</span>{" "}
                    </div>
                  </Card.Text>

                  <Card.Text>
                    <h3>{product.productPrice}</h3>
                    <span className="text-secondary fs-5">
                      {product.productControlType}
                    </span>
                  </Card.Text>

                  <Card.Title>
                    {" "}
                    <h3>{}</h3>{" "}
                  </Card.Title>

                  <Link
                    to={`/singleproduct/${product._id}`}
                    className="mt-auto"
                  >
                    <Button className="mt-3 px-4" variant="danger">
                      Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
