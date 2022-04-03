import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import google from "../../Images/google.png";
import "./LogIn.css";

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
  const redirect_uri = location.state?.from || "/home";
  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// Google HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

  const googleLoginHandler = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
        // console.log(result.user);
        //add user to mongoDB
        addUserToDatabase(result.user.email);
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

  //add user to mongoDB
  const addUserToDatabase = (email) => {
    fetch("https://morning-badlands-81993.herokuapp.com/users", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="signin-banner d-flex align-items-start justify-content-between">
      <div>
        <h1 className="border border-danger text-white">NOTHING</h1>
      </div>
      <div lg={4} xl={4} sm={12} className="border border-danger px-5">
        <h1 className="text-uppercase">
          <span style={{ color: "#B91A1A" }}>Please</span>&nbsp;
          <span className="text-white">Sign In</span>{" "}
        </h1>
        <Form>
          {/* Email Field */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white fs-5">Email</Form.Label>
            <Form.Control
              className="border border-2 border-danger"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              onClick={removeError}
              onBlur={emailBlurHandler}
              type="email"
              placeholder="Enter Email"
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
          {/* Not having an account */}
          <div className="mb-3">
            <span className="text-white">Don't have an account?</span>
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
          {/* Button */}
          <button onClick={googleLoginHandler} className="mx-auto signin-btn">
            <div className="d-flex align-items-center justify-content-between">
              <img height="32" width="32" src={google} alt="" />{" "}
              <span>Continue With Google</span>{" "}
              <span style={{ color: "#B91A1A" }}>G</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
