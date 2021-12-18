import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "../BuyProduct/BuyProduct.css";

const BuyProduct = ({ backgroundColor = "#F6F6F6", children }) => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://morning-badlands-81993.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://morning-badlands-81993.herokuapp.com/allorders", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank You ! Order Placed Successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div style={{ backgroundColor }}>
      <div className="pt-5">
        <h3 className="text-center text-uppercase">
          product <span className="text-danger">details</span>
        </h3>
      </div>
      <Container>
        <Row className="p-5">
          <Col xl={6} lg={6} sm={12}>
            <div className="d-grid align-items-center">
              {/* Drone Image */}
              <div className="d-flex justify-content-center">
                <img
                  className="product-img "
                  src={singleProduct.productImg}
                  alt=""
                />
              </div>
              {/* Drone Details  */}
              <div>
                <div>
                  <h3 className="text-danger">{singleProduct.productName}</h3>
                  <p className="text-justify mt-3 ">
                    {singleProduct.productDescription}
                  </p>
                </div>
                {/* Price */}
                <h1 className="display-4 mb-3">{singleProduct.productPrice}</h1>
                {/* Specifications */}
                <div className="mb-5">
                  <span className="fs-4 mt-3 mb-3">Specification</span>
                  <div className="mt-3">
                    <p>
                      <strong>Name :</strong> &nbsp;{singleProduct.productName}
                    </p>
                    <p>
                      <strong>Model :</strong> &nbsp;
                      {singleProduct.productModel}
                    </p>
                    <p>
                      <strong>Camera :</strong> &nbsp;
                      {singleProduct.productResolution}
                    </p>
                    <p>
                      <strong>Range :</strong> &nbsp;
                      {singleProduct.productRange}
                    </p>
                    <p>
                      <strong>Battery Backup :</strong> &nbsp;
                      {singleProduct.productBatteries}
                    </p>
                    <p>
                      <strong>Control :</strong> &nbsp;
                      {singleProduct.productControlType}
                    </p>
                  </div>
                </div>
                <div className="mb-5 back-allproducts">
                  <Link
                    to="/products"
                    style={{ color: "#d9534f", textDecoration: "none" }}
                  >
                    Back to All Products
                  </Link>
                </div>
              </div>
              {/* Drone Details  */}
            </div>
          </Col>

          <Col xl={3} lg={3} sm={12} className="mx-auto ">
            <Form
              className="d-flex flex-column mt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              {singleProduct.productName && (
                <input
                  style={{ outline: "none" }}
                  className="mb-3 py-2 px-3"
                  defaultValue={singleProduct.productName}
                  {...register("singleProductName")}
                />
              )}

              {singleProduct.productModel && (
                <input
                  style={{ outline: "none" }}
                  className="mb-3 py-2 px-3 "
                  defaultValue={singleProduct.productModel}
                  {...register("singleProductModel")}
                />
              )}

              <input
                style={{ outline: "none" }}
                className="mb-3 py-2 px-3"
                defaultValue={user.displayName}
                {...register("userName")}
              />
              <input
                style={{ outline: "none" }}
                className="mb-3 py-2 px-3"
                defaultValue={user.email}
                {...register("userEmail")}
              />
              {/* Error */}

              {singleProduct.productImg && (
                <input
                  className="mb-3 p-2 d-none"
                  defaultValue={singleProduct.productImg}
                  {...register("singleProductImg")}
                />
              )}

              {singleProduct.productPrice && (
                <input
                  className="mb-3 py-2 px-3"
                  defaultValue={singleProduct.productPrice}
                  {...register("singleProductPrice")}
                />
              )}

              {/* Error */}

              <input
                className="mb-3 p-2 d-none"
                defaultValue="Pending"
                {...register("bookedproductStatus")}
              />

              <Button variant="danger" type="submit">
                Order Now
              </Button>
            </Form>
            <div className="mb-3 text-center mt-5 res-back-allproducts">
              <Link
                to="/products"
                style={{ color: "#d9534f", textDecoration: "none" }}
              >
                Back to All Products
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuyProduct;
