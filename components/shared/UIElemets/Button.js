import React from "react";
function Button({ title, classes, styles, btnclass }) {
  return (
    <div className={classes}>
      <button className={btnclass} style={{ ...styles }}>
        {title}
      </button>
    </div>
  );
}

export default Button;
