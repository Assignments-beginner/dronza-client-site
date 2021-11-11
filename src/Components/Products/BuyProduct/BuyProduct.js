import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const BuyProduct = ({ backgroundColor = '#F6F6F6', children }) => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://morning-badlands-81993.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

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
            title: "Thank You ! Order Placed Succesfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div style={{ backgroundColor }}>
      <div className="d-flex align-items-baseline px-5">
        <Container className="w-50 m-5 p-5">
          <div className="d-grid align-items-center">            
            {/* Drone Image */}
            <div>
              <img
                class="rounded-circle custom-border"
                width="530"
                height="280"
                src={singleProduct.productImg}
                alt=""
              />
            </div>
            {/* Drone Details  */}
            <div className="me-5">
              <div>
                <h3 className="text-danger">{singleProduct.productName}</h3>
                <p className="text-justify mt-3">
                  {singleProduct.productDescription}
                </p>
              </div>
              <Link
                to="/products"
                style={{ color: "#d9534f", textDecoration: "none" }}
              >
                Back to All Products
              </Link>
            </div>
            {/* Drone Details  */}
          </div>
        </Container>

        <Form
          className="d-flex flex-column w-25 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          {singleProduct.productName && (
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3 "
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
      </div>
    </div>
  );
};

export default BuyProduct;
