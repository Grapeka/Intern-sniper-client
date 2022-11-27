import React from "react";

import User from "../../types/User";
import UserTitle from "../UserTitle";
import Timeline from "../../interfaces/Timeline";
import classes from "./index.module.scss";

import { FiMinusCircle } from "react-icons/fi";

type Props = {
  user: any;
};

function TopBar(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <FiMinusCircle className={classes.icon} />
        <UserTitle user={props.user} />
      </div>
    </div>
  );
}

export default TopBar;
