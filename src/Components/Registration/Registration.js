import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Registration.css";

const Registration = () => {
  const {
    passwordBlurHandler,
    emailBlurHandler,
    nameBlurHandler,
    setUserName,
    email,
    password,
    registerNewUser,
    error,
    setError,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  // console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/greetings";

  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// REGISTER HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const registrationHandler = (e) => {
    e.preventDefault();
    registerNewUser(email, password)
      .then((result) => {
        //Redirect Path
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
        //Update displayName
        setUserName();
        //add user to mongoDB
        addUserToDatabase(user.email);
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Heroku_Problem
  //add user to mongoDB

  const addUserToDatabase = (email) => {
    //Heroku_Problem
    // fetch("http://localhost:5000/users", {
    fetch("https://morning-badlands-81993.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  //For Remove Error
  const removeError = () => {
    setError("");
  };

  return (
    <div className="registration-banner registration-form">
      <div className="empty-div"></div>
      <div xl={4} lg={4} sm={12} className="pt-4 px-5 border border-danger">
        <h1 className="text-light text-uppercase">
          sign up now
          <span className="empty-text">Here</span>
        </h1>
        <Form>
          {/* Name Field */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white fs-5">Name</Form.Label>
            <Form.Control
              className="border border-2 border-danger"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              onClick={removeError}
              onBlur={nameBlurHandler}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          {/* Email Field */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white fs-5">Email</Form.Label>
            <Form.Control
              className="border border-2 border-danger"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              onClick={removeError}
              onBlur={emailBlurHandler}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          {/* Password Field */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white fs-5">Password</Form.Label>
            <Form.Control
              className="border border-2 border-danger"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              onClick={removeError}
              onBlur={passwordBlurHandler}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {/*  Having an account */}
          <div className="mb-3">
            <span className="text-white fs-5">Already have an account?</span>
            &nbsp;
            <Link
              className="text-white fs-5 fw-bold"
              onClick={removeError}
              to="/signin"
            >
              Sign In
            </Link>
          </div>
          {/* Display Error */}

          {/* |.| */}

          {error && (
            <div className="mb-3 bg-white py-1 px-2 border border-danger rounded d-flex align-items-center justify-content-center">
              <i className="fas fa-exclamation-triangle text-warning fs-4"></i>
              &nbsp;&nbsp;
              <span className="text-danger">{error}</span>
            </div>
          )}

          {/* |.| */}

          {/* Register Button */}
          <div className="mb-5">
            <Button
              onClick={registrationHandler}
              variant="outline-light"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
