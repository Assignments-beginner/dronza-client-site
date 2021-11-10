import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import YourOrders from "./YourOrders/YourOrders";
import AddReview from "./AddReview/AddReview";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1 className="text-center text-uppercase my-5 display-6">
        dash<strong style={{ color: "#ea3c23" }}>board</strong>
      </h1>
      <Container className="my-5">
        <Row>
          <Col sm={3}>
            <div className="menubar pt-2 px-3">
              <Nav className="d-grid me-auto">
                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to={`${url}/yourorders`}
                >
                  Your Orders
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to={`${url}/addreview`}
                >
                  Add Review
                </NavLink>
                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to={`${url}/addnewproduct`}
                >
                  Add New Product
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to={`${url}/manageallorders`}
                >
                  Manage All Orders
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <div className="px-5">
              <Switch>
                <Route exact path={path}>
                  <h3>Please select a topic.</h3>
                </Route>

                <Route exact path={`${path}/yourorders`}>
                  <YourOrders></YourOrders>
                </Route>

                <Route path={`${path}/addnewproduct`}>
                  <AddNewProduct></AddNewProduct>
                </Route>

                <Route path={`${path}/addreview`}>
                  <AddReview></AddReview>
                </Route>

                <Route path={`${path}/manageallorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
