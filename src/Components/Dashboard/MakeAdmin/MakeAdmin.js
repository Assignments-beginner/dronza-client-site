import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
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
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div style={{ height: "600px" }}>
      <h3 className="text-center text-uppercase">
        Make <span className="text-danger">admin</span>
      </h3>
      <Container className="d-flex justify-content-center">
        <form
          onSubmit={handleAdminSubmit}
          className="mt-5 w-50 d-flex justify-content-center"
        >
          <input
            className="form-control"
            placeholder="Enter Email"
            type="email"
            onBlur={handleOnBlur}
          />
          <button className="btn btn-danger" type="button" id="button-addon2">
            Approve
          </button>
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
