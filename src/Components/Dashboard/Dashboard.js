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
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Payment from "./Payment/Payment";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <h1 className="text-center text-uppercase mt-3 display-6">
          dash<strong style={{ color: "#ea3c23" }}>board</strong>
        </h1>
      </div>
      <hr />
      <Container className="my-5">
        <Row>
          <Col sm={3}>
            <div className="menubar pt-5 px-3">
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
                  to={`${url}/payment`}
                >
                  Payment
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

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to={`${url}/makeadmin`}
                >
                  Make Admin
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to={`${url}/logout`}
                >
                  Log Out
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <div className="px-5">
              <Switch>
                <Route exact path={path}>
                  <YourOrders></YourOrders>
                </Route>

                <Route exact path={`${path}/yourorders`}>
                  <YourOrders></YourOrders>
                </Route>

                <Route path={`${path}/addreview`}>
                  <AddReview></AddReview>
                </Route>

                <Route path={`${path}/payment`}>
                  <Payment></Payment>
                </Route>

                <Route path={`${path}/addnewproduct`}>
                  <AddNewProduct></AddNewProduct>
                </Route> 

                <Route path={`${path}/manageallorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </Route>

                <Route path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
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
