import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../../context/AppContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Navbars = () => {
  const { changeLang, isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        variant="light"
        fixed="top"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid orange" }}
      >
        <Navbar.Brand style={{ fontSize: "28px" }}>
          Simnoor <span style={{ color: "orange" }}>Yazdan</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/products" passHref>
              <Nav.Link>Products</Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link>News</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About us</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact us</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button onClick={changeLang} variant="outline-dark">
                FA
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  if (!isEng) {
    return (
      <Navbar
        style={{ textAlign: "right" }}
        className="rtlfont"
        collapseOnSelect
        expand="md"
        fixed="top"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid orange" }}
        variant="light"
      >
        <Navbar.Brand style={{ fontSize: "28px" }}>
          سیم نور <span style={{ color: "orange" }}>یزدان</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{ textAlign: "right" }}>
            <Link href="/" passHref>
              <Nav.Link>خانه</Nav.Link>
            </Link>
            <Link href="/products" passHref>
              <Nav.Link>محصولات</Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link>اخبار</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>درباره ما</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>تماس با ما</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button
                className="ltrfont"
                onClick={changeLang}
                variant="outline-dark"
              >
                EN
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Navbars;
