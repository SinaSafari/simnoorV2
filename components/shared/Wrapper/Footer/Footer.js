import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const Footer = () => {
  const { isEng } = useContext(AppContext);
  return (
    <div>
      <hr />
      Footer: the language is:
      {isEng ? <h3>English</h3> : <h3>Farsi</h3>}
    </div>
  );
};

export default Footer;
