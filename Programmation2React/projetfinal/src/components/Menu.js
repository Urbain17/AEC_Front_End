import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Projet final</Navbar.Brand>
          <Nav className="mr-auto decormenu">
            <NavLink exact to="/" >
              Accueil
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/Ajouter" >
              Ajouter une auto
            </NavLink>{" "}

          </Nav>
        </Navbar>
        <br />
      </>
    );
  }
}
