import React from "react";

import Navs from "./Navigation/Nav";
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
