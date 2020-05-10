import React from "react";

import Navs from "./Navigation/Nav";
import NewFooter from "./Footer/NewFooter";
import Navbar from "./Navigation/Navbar";
const MainWrapper = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <NewFooter />
    </>
  );
};

export default MainWrapper;
