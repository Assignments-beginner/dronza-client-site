import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
  return (
    <div>
      <h3 className="text-center text-uppercase my-5">
        dash<strong style={{ color: "#ea3c23" }}>board</strong>
      </h3>
      <Container className="my-5">
        <Row>
          <Col sm={2}>
            <div className="p-2">
              <Nav className="me-auto">
                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to="/#"
                >
                  Your Orders
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to="/#"
                >
                  Add Review
                </NavLink>
                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to="/#"
                >
                  Add New Product
                </NavLink>

                <NavLink
                  activeClassName="dashboard-active"
                  className="dashboard mb-3 text-decoration-none"
                  to="/#"
                >
                  Manage All Orders
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={10}>
            <div className="px-5 square border-start">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt assumenda doloribus corrupti officiis incidunt aperiam
                vitae nemo minus asperiores sint at maiores, ab provident
                reiciendis aliquid doloremque quos maxime laborum. Laboriosam
                placeat sapiente ut eaque perferendis odio ipsa ducimus mollitia
                veritatis obcaecati officiis, dolores provident qui quibusdam
                expedita at! Officia dicta maxime ipsa! Doloremque illum ipsa
                sapiente alias consectetur quia expedita, blanditiis sed
                voluptatibus, reprehenderit a ullam repellat cupiditate itaque
                reiciendis! Recusandae iure laboriosam, vero doloremque eligendi
                quod officiis fugiat sint nesciunt eius. Fugit iure, accusamus
                quam dolore sapiente cum repudiandae ipsa ullam, esse vel
                necessitatibus repellat vitae quibusdam voluptate modi nisi sed
                itaque. Voluptatibus voluptates laborum facilis provident
                perspiciatis nemo natus nihil mollitia rem. Accusantium dolor
                corrupti similique, tenetur magnam facere, deleniti repellat
                vitae quasi perferendis vel id quibusdam porro voluptates ad
                culpa est at nam facilis optio excepturi labore sapiente.
                Voluptatibus, facilis! Odit nobis dolorem sequi enim ut amet
                facere doloremque saepe qui voluptates, ad ea possimus provident
                a beatae necessitatibus vero dolor recusandae dolores
                exercitationem magnam reiciendis! Dignissimos, temporibus vel
                magnam, ea aliquid inventore rerum error quisquam quod quo eius
                aspernatur aliquam libero nostrum laborum perferendis porro
                atque aut cupiditate! Alias odit cumque nemo optio dolores
                aliquid.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
