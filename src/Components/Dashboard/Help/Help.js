import React from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../Help/Help.css";

const Help = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "first-porfolio",
        "portfolio-template",
        e.target,
        "user_wFVXijDSM0kcmETI1oT1V"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Thank You!",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mb-5 pb-3">
      <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
        Contact <span className="text-danger">Us</span>
      </h3>
      <Form className="help-form mx-auto" onSubmit={sendEmail}>
        <div className="d-flex mb-3">
          <Form.Control
            className="help-input me-1 p-2"
            type="name"
            name="firstname"
            placeholder="First Name"
            required
          />
          <Form.Control
            className="help-input ms-1 p-2"
            type="name"
            name="lastname"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="d-flex mb-3">
          <Form.Control
            className="help-input me-1 p-2"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <Form.Control
            className="help-input ms-1 p-2"
            type="text"
            name="phone"
            placeholder="Phone"
            required
          />
        </div>

        <Form.Control
          className="help-input mb-3 p-2"
          as="textarea"
          name="message"
          placeholder="Describe Your Problem"
        />

        <Button className="mb-3" variant="danger" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Help;
