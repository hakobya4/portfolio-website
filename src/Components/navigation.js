import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";

function Navigation() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-350); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  // Styles for the navbar and links
  const navbarStyle = {
    backgroundColor: "#000229",
    position: "fixed",
    top: `${top}px`,
    width: "100%",
    transition: "top 0.3s",
  };
  const linkStyle = {
    float: "right",
    display: "block",
    textAlign: "end",
    padding: "15px",
    textDecoration: "none",
    fontSize: "17px",
  };
  return (
    <Navbar
      expand="lg"
      className="navbar no-select"
      bg="myColor"
      variant="dark"
      sticky="top"
      style={navbarStyle}
    >
      <Container className="navigation">
        <Navbar.Brand href="#home">
          <img src="/NH.png" alt="logo" className="narek logo"></img>
          NAREK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="collapse">
          <Nav className="me-auto ">
            <Nav.Link href="#home" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={linkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="#work" style={linkStyle}>
              Work
            </Nav.Link>
            <Nav.Link href="#contact" style={linkStyle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
