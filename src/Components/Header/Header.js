import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../Hooks/useAuth";
// import dronza from "../../Images/dronza.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar className="nav-font bg-dark py-3" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          {/* <img width="100" height="50" src={dronza} alt="" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5 me-auto">
            <NavLink
              activeClassName="navs-active"
              className="navs me-3 text-decoration-none"
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              activeClassName="navs-active"
              className="navs me-3 text-decoration-none"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              activeClassName="navs-active"
              className="navs me-3 text-decoration-none"
              to="/products"
            >
              Products
            </NavLink>

            <NavLink
              activeClassName="navs-active"
              className="navs me-3 text-decoration-none"
              to="/guideline"
            >
              Guideline
            </NavLink>

            <NavLink
              activeClassName="navs-active"
              className="navs me-3 text-decoration-none"
              to="/contactus"
            >
              Contact Us
            </NavLink>

            <NavLink
              activeClassName="navs-active"
              className="navs me-3 text-decoration-none"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </Nav>
          {/* User Profile */}
          <Nav className="d-flex align-items-center">
            <div>
              {user?.email && (
                <img
                  className="rounded-circle user-img"
                  width={32}
                  height={32}
                  src={user.photoURL}
                  alt=""
                />
              )}
            </div>

            <NavLink
              activeClassName="navs-active"
              className="navs ms-3 me-3 text-decoration-none fs-6"
              to="/dashboard"
            >
              {user.displayName}
            </NavLink>

            {!user?.email && (
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3 text-decoration-none fs-6"
                to="/signin"
              >
                Sign in
              </NavLink>
            )}

            {user?.email && (
              <NavLink
                activeClassName="navs-active"
                className="navs ms-3 me-3 text-decoration-none fs-6"
                to="/contactus"
                onClick={logOut}
              >
                Log out
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
