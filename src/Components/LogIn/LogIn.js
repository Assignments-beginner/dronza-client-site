import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import google from "../../Images/google.png";
import "./Login.css";

const LogIn = () => {
  const {
    signInWithGoogle,
    passwordBlurHandler,
    emailBlurHandler,
    processLogin,
    email,
    password,
    setIsLoading,
    error,
    setError,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  // console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/dashboard";
  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// Google HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

  const googleLoginHandler = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// SIGN IN HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const signInHandler = (e) => {
    e.preventDefault();
    processLogin(email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //For Error Remove
  const removeError = () => {
    setError("");
  };

  return (
    <Container className="mt-4 w-25">
      <p className="text-uppercase fs-2">
        Please <span className="text-danger">Sign In</span>{" "}
      </p>
      <Form>
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
        {/* Not having an account */}
        <div className="mb-3">
          <span>Don't have an account?</span>
          &nbsp; &nbsp;
          <Link
            className="text-danger"
            onClick={removeError}
            to="/registration"
          >
            Create One
          </Link>
        </div>
        {/* Display Error */}
        <p className="text-danger">{error}</p>
        {/* Register Button */}
        <Button onClick={signInHandler} variant="danger" type="submit">
          Sign In
        </Button>
      </Form>

      <div className="mt-3 mb-5 d-grid justify-items-center">
        <p className="text-secondary mb-3 text-center">Or you can also</p>
        {/* Button */}
        <button onClick={googleLoginHandler} className="signin-btn">
          <div className="d-flex align-items-center justify-content-between">
            <img height="32" width="32" src={google} alt="" />{" "}
            <span>Continue With Google</span>{" "}
            <span className="text-white">G</span>
          </div>
        </button>
      </div>
    </Container>
  );
};

export default LogIn;
