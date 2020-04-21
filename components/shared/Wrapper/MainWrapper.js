import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "./Footer/Footer";
import Navs from "./Navigation/Nav";

const MainWrapper = (props) => {
  return (
    <>
      <Navs />
      {props.children}
      <Footer />
    </>
  );
};

export default MainWrapper;
