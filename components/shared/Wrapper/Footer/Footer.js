import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";

import "./Footer.css";

const Footer = () => {
  const { isEng } = useContext(AppContext);

  return (
    <div>
      <footer
        className=" bg-light   "
        style={{ borderTop: "1px solid orange" }}
      >
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
                  <a href="http://pouyeshsystem.com/">Pouyesh System</a> &copy;{" "}
                  {new Date().getFullYear()}
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2 p-0"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
