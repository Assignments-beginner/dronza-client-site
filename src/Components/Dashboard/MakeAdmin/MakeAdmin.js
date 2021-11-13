import React from "react";
import { Container } from "react-bootstrap";

const MakeAdmin = () => {
  return (
    <div style={{height:'600px'}}>
      <h3 className="text-center text-uppercase">
        Make <span className="text-danger">admin</span>
      </h3>
      <Container className="d-flex justify-content-center">
      <div class="input-group mt-5 w-50">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Email"
        />
        <button
          class="btn btn-danger"
          type="button"
          id="button-addon2"
        >
          Approve
        </button>
      </div>
      </Container>
    </div>
  );
};

export default MakeAdmin;
