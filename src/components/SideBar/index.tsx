import React from "react";

import User from "../../types/User";

import styles from "./index.module.scss";

type Props = {
  user: User;
};

function Sidebar(Props: Props) {
  if (Props.user) {
    return <div className={styles.container}></div>;
  }
  return <div className={styles.container}>No user receive</div>;
}

export default Sidebar;
