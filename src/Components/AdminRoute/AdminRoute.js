import React from "react";
import { Route, Redirect } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  
  const style = {
    position: "fixed",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if(isLoading) {
    return (
      <div style={style}>
        <div
          className="spinner-border spinner-border-sm text-dark"
          style={{ width: "5rem", height: "5rem" }}
        ></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/sorry", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
