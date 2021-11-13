import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import YourOrders from "./YourOrders/YourOrders";
import AddReview from "./AddReview/AddReview";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Payment from "./Payment/Payment";
import useAuth from "../../Hooks/useAuth";
import ManageAllProducts from "./ManageAllProducts/ManageAllProducts";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <h1 className="text-center text-uppercase mt-3 mb-3 display-6">
          dash<strong className="text-danger">board</strong>
        </h1>
      </div>
      <hr className="new" />
      <Container className="mt-4 mb-5 pb-5">
        <Row>
          <Col sm={2} xl={2} lg={2}>
            <div className="pt-5 px-2">
              <Nav className="d-grid me-auto">
                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to={`${url}/yourorders`}
                >
                  Your Orders
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to={`${url}/payment`}
                >
                  Payment
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to={`${url}/addreview`}
                >
                  Add Review
                </NavLink>

                {admin && (
                  <Nav>
                    <NavLink
                      activeClassName="dashboard-active"
                      className="dashboard mb-3 text-decoration-none text-uppercase"
                      to={`${url}/addnewproduct`}
                    >
                      Add New Product
                    </NavLink>
                    
                    
                    <NavLink
                      activeClassName="dashboard-active"
                      className="dashboard mb-3 text-decoration-none text-uppercase"
                      to={`${url}/manageallproducts`}
                    >
                      Manage All Products
                    </NavLink>
                    
                    
                    <NavLink
                      activeClassName="dashboard-active"
                      className="dashboard mb-3 text-decoration-none text-uppercase"
                      to={`${url}/manageallorders`}
                    >
                      Manage All Orders
                    </NavLink>
                    
                    
                    <NavLink
                      activeClassName="dashboard-active"
                      className="dashboard mb-3 text-decoration-none text-uppercase"
                      to={`${url}/makeadmin`}
                    >
                      Make Admin
                    </NavLink>
                  </Nav>
                )}
                
                
                <NavLink
                  activeClassName="dashboard-active"
                  onClick={logOut}
                  className="dashboard mb-3 text-decoration-none text-uppercase"
                  to="/home"
                >
                  <Button size="sm" variant="danger mt-3 px-4">
                    Log Out
                  </Button>
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={10} xl={10} lg={10}>
            <div className="menubar px-5 w-100">
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

                <Route path={`${path}/manageallproducts`}>
                  <ManageAllProducts></ManageAllProducts>
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
