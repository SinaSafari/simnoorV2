import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "./Footer/Footer";

const MainWrapper = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <Footer />
    </>
  );
};

export default MainWrapper;
