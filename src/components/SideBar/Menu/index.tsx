import React from "react";

import classes from "./index.module.scss";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className={classes.container}>
      <MenuItem />
    </div>
  );
}

export default Menu;
