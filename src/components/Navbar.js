import React, { Component, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { debounce } from "../components/debounce";
import ScrollToTop from "../components/ScrollToTop.js";

const Navbar1 = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = debounce(() => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(prevScrollPos > currentScrollPos);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 1);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [prevScrollPos, visible, expand, navColour, scrollHandler]);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    textAlign: "center",
    // new:
    transition: "top 0.1s",
  };

  return (
    <Navbar
      style={{ ...navbarStyles, top: visible ? "0" : "0" }}
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="nav-container">
        <Navbar.Brand href="/" className="nav-jordan">
          Jordan Hodges
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-end"
            style={{ width: "100%" }}
            defaultActiveKey="#home"
          >
            <Nav.Item>
              <Nav.Link
                as={HashLink}
                className="nav-font"
                to="/#hero"
                onClick={() => updateExpanded(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-font"
                as={HashLink}
                to="/#projects"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-font"
                as={HashLink}
                to="/#about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
