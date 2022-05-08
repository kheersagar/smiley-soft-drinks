import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

//css
import "./NavigationBar.css";

//image
import logo from "../../Images/logo.svg";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navnar_main"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} style={{ maxWidth: "6rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ flexGrow: "unset" }}
        >
          <Nav className="justify-content-end">
          <NavLink
                to="/"
                className={(isActive) =>
                  "nav_item nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={(isActive) =>
                  "nav_item nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Our Products
              </NavLink>
              <NavLink
                to="/dealership"
                className={(isActive) =>
                  "nav_item nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Dealership
              </NavLink>
              <NavLink
                to="/about-us"
                className={(isActive) =>
                  "nav_item nav-link" + (!isActive ? " unselected" : "")
                }
              >About Us
              </NavLink>
            <Nav.Link className="nav_item" href="#pricing">
              Gallery
            </Nav.Link>
            <Nav.Link className="nav_item_last" href="#pricing">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
