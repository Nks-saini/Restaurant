import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faHome,
  faSearch,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import {  Link } from "react-router-dom";

export default class NavbarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  Home <FontAwesomeIcon icon={faHome} />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  List <FontAwesomeIcon icon={faList} />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">
                  Create <FontAwesomeIcon icon={faPlus} />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  Search <FontAwesomeIcon icon={faSearch} />
                </Link>
              </Nav.Link>

              {localStorage.getItem("login") ? (
                <Nav.Link href="#link">
                  <Link to="/logout">
                    Logout <FontAwesomeIcon icon={faUser} />
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link href="#link">
                  <Link to="/login">
                    Login <FontAwesomeIcon icon={faUser} />
                  </Link>
                </Nav.Link>
              )}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
