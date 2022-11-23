import React from "react";

import User from "../../types/User";
import Sidebar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import classes from "./index.module.scss";

type Props = {
  user: User;
  children: React.ReactNode;
};

function AppPage(props: Props) {
  return (
    <div className={classes.page}>
      <TopBar user={props.user} />
      <div className={classes.row}>
        <Sidebar user={props.user} />
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default AppPage;
