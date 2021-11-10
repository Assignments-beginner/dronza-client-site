import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://boiling-anchorage-22873.herokuapp.com/packages", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          // alert("Package Addeded Successfully!");
          reset();
          setSuccess("Package Added Successfully!");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };
  return (
    <div>
      <h3 className="text-center text-dark mb-5 text-uppercase">
        add <span style={{ color: "#ea3c23" }}>review</span>
      </h3>

      <Form
        className="d-flex flex-column w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Name"
          {...register("userName")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("userImg")}
        />

        <textarea
          style={{ outline: "none" }}
          maxlength="50"
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Review 50 Characters Only"
          {...register("userReview")}
        />
        
        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
      <p className="text-center text-white text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
  );
};

export default AddReview;
