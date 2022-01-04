import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddNewProduct.css";

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://morning-badlands-81993.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "New product added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="mb-5 pb-3">
      <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
        add new <span className="text-danger">product</span>
      </h3>

      <Form
        className="d-flex flex-column newProducts-form mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Name"
          {...register("productName")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("productImg")}
        />
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Model No."
          {...register("productModel")}
        />
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Range"
          {...register("productRange")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Control Type"
          {...register("productControlType")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Camera Resolution"
          {...register("productResolution")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Battery Backup"
          {...register("productBatteries")}
        />
        <textarea
          style={{ outline: "none" }}
          // maxlength="150"
          className="mb-3 py-2 px-3"
          placeholder="Description"
          {...register("productDescription")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="$ Price"
          {...register("productPrice")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3 w-50"
          type="number"
          min="1"
          max="5"
          placeholder="* Rating"
          {...register("productRating")}
        />

        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default AddNewProduct;
