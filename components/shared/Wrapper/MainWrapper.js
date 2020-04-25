import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "./Footer/Footer";
import Navs from "./Navigation/Nav";
import Navig from "./Navigation/Navig";
import Navbar from "../Wrapper/Navigation/Nav/Navbar";
import NewFooter from "./Footer/NewFooter";
const MainWrapper = (props) => {
  return (
    <>
      <Navs />
      <main>{props.children}</main>
      <NewFooter />
    </>
  );
};

export default MainWrapper;
