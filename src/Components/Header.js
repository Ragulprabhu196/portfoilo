import React from 'react'
import { Container, Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const Header = () => {
  let activeStyle = {
    color: "#fff",
  };
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>RAGUL PRABHU RS</Navbar.Brand>
          <NavbarToggle />
          <NavbarCollapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/Projects"
               
                className="nav-link"
              >
                Projects
              </NavLink>
              <NavLink
                to="/Services"
                
                className="nav-link"
              >
                Services
              </NavLink>
              <NavLink
                to="/About"
               
                className="nav-link"
              >
                About
              </NavLink>
              <NavLink
                to="/Contact"
               
                className="nav-link"
              >
                Contact
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;