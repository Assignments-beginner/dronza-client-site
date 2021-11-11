import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then((res) => res.json())
      .then((data) => setProducts(data));
    },[])
  return (
    <div>
      <div>
        <h2 className="my-5 text-center text-dark text-uppercase">
          all products
        </h2>
      </div>
      <Container className="w-100 mb-5">
        <Row className="g-5">
          {products.map((product) => (
            <Col key={product._id} product={product} xl={4} lg={4}>
            <Card>
              <Card.Img variant="top" src={productImg} />
              <Card.Body className="p-4">
                <Card.Text className="d-flex justify-content-between align-items-center">
                  {" "}
                  <div className="d-flex align-items-center">
                    <strong style={{ fontSize: "18px", color: "#ea3c23" }}>
                      {serviceCost}
                    </strong>
                    <span>/Per Person</span>
                  </div>
                  <span>
                    <i className="far fa-calendar-minus"></i>&nbsp;{serviceTime}
                  </span>{" "}
                </Card.Text>
      
                <Card.Title>
                  {" "}
                  <h3>{serviceName}</h3>{" "}
                </Card.Title>
      
                <Link to={`/services/${_id}`} className="mt-auto">
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
