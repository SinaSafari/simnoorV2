import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
const MainWrapper = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default MainWrapper;
