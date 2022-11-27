import React from "react";

import User from "../../types/User";
import classes from "./index.module.scss";
import Menu from "./Menu";

type Props = {
  user: any;
};

function Sidebar(props: Props) {
  if (props.user) {
    return (
      <div className={classes.container}>
        <Menu user={props.user} />
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <Menu user={props.user} />
    </div>
  );
}

export default Sidebar;
