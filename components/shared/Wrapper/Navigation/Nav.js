import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import Link from "next/link";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

const Navs = () => {
  const { isLoggedIn, logout, isEng, changeLang } = useContext(AppContext);
  const router = useRouter();
  const logoutHandler = () => {
    logout();
    router.push("/");
  };

  if (isEng) {
    return (
      <Navbar
        // bg="light"
        expand="lg"
        sticky="top"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid orange" }}
      >
        <Navbar.Brand href="#home">
          <img
            src="/icons/simnoorlogo.png"
            className="my-0 mr-md-auto font-weight-normal"
            width="100"
            height="55"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <a className="p-2 text-dark">Home</a>
            </Link>
            <Link href="/products">
              <a className="p-2 text-dark">Products</a>
            </Link>
            <Link href="/about">
              <a className="p-2 text-dark">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="p-2 text-dark">Contact us</a>
            </Link>

            {isLoggedIn && (
              <Link href="/profile">
                <a className="p-2 text-dark">Profile</a>
              </Link>
            )}
          </Nav>
          <Form inline>
            {/* <Button variant="outline-success">Search</Button> */}
            {isLoggedIn && (
              <a
                className="btn btn-outline-primary mx-1"
                onClick={logoutHandler}
              >
                Logout
              </a>
            )}
            {!isLoggedIn && (
              <Link href="/auth">
                <a className="btn btn-outline-primary mx-1">Login</a>
              </Link>
            )}

            <a onClick={changeLang} className="btn btn-outline-primary mx-1">
              FA
            </a>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  if (!isEng) {
    return (
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
        className="rtlfont"
        style={{ textAlign: "right" }}
      >
        <Navbar.Brand href="#home">
          <img
            src="/icons/simnoorlogo.png"
            className="my-0 mr-md-auto font-weight-normal"
            width="100"
            height="55"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <a className="p-2 text-dark">خانه</a>
            </Link>

            <Link href="/products">
              <a className="p-2 text-dark">محصولات</a>
            </Link>

            <Link href="/about">
              <a className="p-2 text-dark">درباره ما</a>
            </Link>

            <Link href="/contact">
              <a className="p-2 text-dark">تماس با ما</a>
            </Link>

            {isLoggedIn && (
              <Link href="/profile">
                <a className="p-2 text-dark">پروفایل</a>
              </Link>
            )}
          </Nav>
          <Form inline>
            {/* <Button variant="outline-success">Search</Button> */}
            {isLoggedIn && (
              <a
                className="btn btn-outline-primary mx-1"
                onClick={logoutHandler}
              >
                خروج
              </a>
            )}
            {!isLoggedIn && (
              <Link href="/auth">
                <a className="btn btn-outline-primary mx-1">ورود</a>
              </Link>
            )}

            <a
              onClick={changeLang}
              className="ltrfont btn btn-outline-primary mx-1"
            >
              EN
            </a>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Navs;
