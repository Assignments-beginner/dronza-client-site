import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import dronza from "../../Images/dronza.png";
import "./Header.css";
// sticky="top"

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      sticky="top"
      className="nav-font bg-dark py-3"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <img
            className="res-logo"
            width="100"
            height="50"
            src={dronza}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5 me-auto">
            <Nav.Link
              as={HashLink}
              activeclassname="navs-active"
              className="text-white navs me-3 text-decoration-none"
              to="/home#home"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              activeclassname="navs-active"
              className="text-white navs me-3 text-decoration-none"
              to="/home#about"
            >
              About
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              activeclassname="navs-active"
              className="text-white navs me-3 text-decoration-none"
              to="/products"
            >
              Products
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              activeclassname="navs-active"
              className="text-white navs me-3 text-decoration-none"
              to="/home#guideline"
            >
              Guideline
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              activeclassname="navs-active"
              className="text-white navs me-3 text-decoration-none"
              to="/home#contactus"
            >
              Contact
            </Nav.Link>
            {user?.email && (
              <Nav.Link
                as={HashLink}
                activeclassname="navs-active"
                className="text-white navs me-3 text-decoration-none"
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>
            )}
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
              activeclassname="navs-active"
              className="navs ms-3 me-3 text-decoration-none fs-6"
              to="/dashboard"
            >
              {user.displayName}
            </NavLink>

            {!user?.email && (
              <NavLink
                activeclassname="navs-active"
                className="navs ms-3 me-3 text-decoration-none fs-6"
                to="/signin"
              >
                Sign in
              </NavLink>
            )}

            {user?.email && (
              <NavLink
                activeclassname="navs-active"
                className="navs ms-3 me-3 text-decoration-none fs-6"
                to="/signin"
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
