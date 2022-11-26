import React, { useContext } from "react";

import User from "../../types/User";
import Sidebar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import classes from "./index.module.scss";
import { AuthContext } from "../../providers/authProvider";

type Props = {
  user: User;
  children: React.ReactNode;
};

function AppPage(props: Props) {
  const context = useContext(AuthContext);
  return (
    <div className={classes.page}>
      <TopBar user={context?.auth} />
      <div className={classes.row}>
        <Sidebar user={context?.auth} />
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default AppPage;
