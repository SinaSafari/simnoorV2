import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "./Footer/Footer";
import Navs from "./Navigation/Nav";
import Navig from "./Navigation/Navig";
const MainWrapper = (props) => {
  return (
    <>
      <Navs />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainWrapper;
