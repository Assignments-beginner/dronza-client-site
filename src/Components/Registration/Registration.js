import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

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
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //For Remove Error
  const removeError = () => {
    setError("");
  };

  return (
    <Container className="mt-4 w-25">
      <p className="text-primary fs-1">Registration</p>
      <Form>
        {/* Name Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onClick={removeError}
            onBlur={nameBlurHandler}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onClick={removeError}
            onBlur={emailBlurHandler}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onClick={removeError}
            onBlur={passwordBlurHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/*  Having an account */}
        <div className="mb-3">
          <span>Already have an account?</span>
          &nbsp; &nbsp;
          <Link onClick={removeError} to="/signin">
            Sign In
          </Link>
        </div>
        {/* Display Error */}

        {/* |.| */}

        <p className="text-danger">{error}</p>

        {/* |.| */}

        {/* Register Button */}
        <div className="mb-5">
          <Button onClick={registrationHandler} variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Registration;
