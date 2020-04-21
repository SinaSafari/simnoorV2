import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";

import "./Footer.css";

const Footer = () => {
  const { isEng } = useContext(AppContext);

  if (isEng) {
    return (
      <div>
        <footer
          className=" bg-light pt-4 pt-md-5 "
          style={{ borderTop: "1px solid orange" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md my-4">
                <img
                  className="mb-2"
                  src="/icons/simnoorlogo.png"
                  alt=""
                  width="120"
                  height="75"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/">
                      Cool stuff
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Random feature
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Team feature
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Stuff for developers
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Another one
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Last time
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/">
                      Resource
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Resource name
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Another resource
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Final resource
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="col-md-6 col-sm-12">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright and developer team info */}
          <div
            className="footer-buttom mt-0 p-3"
            style={{ backgroundColor: "orange" }}
          >
            <div className="ltrfont container">
              <div className="row">
                <div className="col-lg-4 order-2 order-lg-1 p-0">
                  <div className="copyright">
                    Designed and maintain by{" "}
                    <a href="http://pouyeshsystem.com/">Pouyesh System</a>{" "}
                    &copy; {new Date().getFullYear()}
                  </div>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 p-0"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  if (!isEng) {
    return (
      <div>
        <footer
          className="rtlfont bg-light pt-4 pt-md-5 border-top"
          style={{ textAlign: "right" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h5>برگزیده ها</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/">
                      چیزای باحال
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      برگزیده های رندوم
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      تیم ما
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      چیزای مدبوط به دولوپرا
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      یه چیز دیگه
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      اخریش
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-6 col-md">
                <h5>منابع</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/">
                      منبع
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      اسم منبع
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      یه منبع دیگه
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      منبع آخریه
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="col-md-6 col-sm-12">
                <h5>دربارمون</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/">
                      تیم
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      جاها
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      حریم شخصی
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/">
                      قوانین
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md">
                <img
                  className="mb-2"
                  src="/icons/simnoorlogo.png"
                  alt=""
                  width="120"
                  height="75"
                />
              </div>
            </div>
          </div>
          {/* copyright and developer team info */}
          <div
            className="footer-buttom mt-0 p-3"
            style={{ backgroundColor: "orange" }}
          >
            <div className="container ltrfont">
              <div className="row">
                <div className="col-lg-4 order-2 order-lg-1 p-0">
                  <div className="copyright">
                    Designed and maintain by{" "}
                    <a href="http://pouyeshsystem.com/">Pouyesh System</a>{" "}
                    &copy; {new Date().getFullYear()}
                  </div>
                </div>
                <div className="col-lg-7 order-1 order-lg-2 p-0"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
};

export default Footer;
