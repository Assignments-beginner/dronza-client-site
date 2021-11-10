import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

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
      <p className="text-primary fs-1">Please Sign In</p>
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
          <Link onClick={removeError} to="/registration">
            Create One
          </Link>
        </div>
        {/* Display Error */}
        <p className="text-danger">{error}</p>
        {/* Register Button */}
        <Button onClick={signInHandler} variant="primary" type="submit">
          Sign In
        </Button>
      </Form>

      <div className="mt-5 mb-5">
        <p className="text-secondary">Or, you can also sign in with</p>

        <Button
          onClick={googleLoginHandler}
          variant="outline-secondary px-5"
          size="sm"
        >
          Google
        </Button>
      </div>
    </Container>
  );
};

export default LogIn;
