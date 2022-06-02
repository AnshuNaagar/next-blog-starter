import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Link from "next/link";
const NavbarComponent = (props) => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Login", href: "#", current: false },
    {
      name: "About",
      href: "/components/blog/About page for the sake",
      current: false,
    },
    { name: "Contact", href: "/components/Contact", current: false },
  ];
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          left: 0,
          background:"rgba(173, 216, 230, 0.508)",
          backdropFilter:"blur(1px)"
        }}
      >
        <Container>
          <Navbar.Brand href="#home">Next.js Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ul className="navbar-nav">
                <li className="nav-item d-flex">
                  {navigation.map((item) => {
                    return (
                      <Link href={item.href} key={item.href}>
                        <a href={item.href} className="nav-link">
                          {item.name}
                        </a>
                      </Link>
                    );
                  })}
                </li>
              </ul>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
