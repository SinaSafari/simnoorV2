import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Navbar } from "react-bootstrap";
import "./Navig.css";

const COMPANY_DETAILS = {
  email: "info@simnoorco.com",
  phoneNumber: "(+98)21 88661004",
  mainAddress: "No. 11, 33 Alley, Alvand street",
  subAddress: "Tehran,Iran",
};

const MENU = [
  { id: 1, pathTo: "/", routeName: "Home" },
  { id: 2, pathTo: "/products", routeName: "Products" },
  { id: 3, pathTo: "/about", routeName: "About Us" },
  { id: 4, pathTo: "/contact", routeName: "Contact" },
];

function MenuItem({ routeName, pathTo }) {
  const router = useRouter();
  return (
    <>
      <li>
        <Link href={pathTo}>
          <a className={router.pathname == pathTo ? "selected" : ""}>
            {routeName}
          </a>
        </Link>
      </li>
      <style jsx>{`
        .selected {
          color: #fc7626;
        }
      `}</style>
    </>
  );
}

function Header() {
  return (
    <Navbar
      bg="lihgt"
      expand="md"
      style={{ borderBottom: "2px solid orange", marginBottom: "5px" }}
    >
      <img
        className="simnoorlogo"
        src="/icons/simnoorlogo.png"
        style={{ width: "105px", height: "70px", marginLeft: "20px" }}
      />

      <Navbar.Brand className="site-logo my-0 py-0">
        <div className="header-right headerRight">
          <div className="header-info-box">
            <div className="hib-icon">
              <img src="/icons/phone.png" />
            </div>
            <div className="hib-text">
              <h6>{COMPANY_DETAILS.phoneNumber}</h6>
              <p>{COMPANY_DETAILS.email}</p>
            </div>
          </div>
          <div className="header-info-box">
            <div className="hib-icon">
              <img src="/icons/marpmarker.png" />
            </div>
            <div className="hib-text">
              <h6>{COMPANY_DETAILS.mainAddress}</h6>
              <p>{COMPANY_DETAILS.subAddress}</p>
            </div>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="nav" className="site-nav-menu">
          <ul>
            {MENU.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  pathTo={item.pathTo}
                  routeName={item.routeName}
                />
              );
            })}
          </ul>
        </Nav>
      </Navbar.Collapse>
      <style jsx>
        {`
                    .headerRight{
                        top: -25px;
                        margin-left: 20px;
                    }
                    .simnoorlogo {
                        width: 110px;
                        height: 75px;
                        margin-left: 20px:
                    }

                    @media screen and (max-width: 500px){
                        .simnoorlogo {
                            width: 90px;
                            height: 55px;
                        }
                    }
                   
                `}
      </style>
    </Navbar>
  );
}

export default Header;
