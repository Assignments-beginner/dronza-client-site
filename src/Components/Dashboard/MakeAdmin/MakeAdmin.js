import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const admin = { email: email };
    axios
      .put("https://shrouded-headland-08303.herokuapp.com/users/admin", admin)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Admin added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Admin already exist or User Does Not Exist",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  /* const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://morning-badlands-81993.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Admin added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });

    e.preventDefault();
  }; */

  return (
    <div style={{ height: "600px" }}>
      <h3 className="dashboard-sectionTitle text-center text-uppercase">
        Make <span className="text-danger">admin</span>
      </h3>
      <Container className="d-flex justify-content-center">
        <form
          onSubmit={handleAdminSubmit}
          className="mt-5 d-flex justify-content-center"
        >
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Enter Email"
              type="email"
              onBlur={handleOnBlur}
            />
            <button className="btn btn-danger" type="submit">
              Approve
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
