import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import classes from "./menuItem.module.scss";
import { useNavigate } from "react-router-dom";

interface item {
  name: string;
  link: string;
  icon: JSX.Element;
}

type Props = {
  item: item;
  focusIndex: any;
  setFocusIndex: any;
};

function MenuItem(props: Props) {
  const defaultStyle = `${classes.item} ${classes.default}`;
  const focusStyle = `${classes.item} ${classes.active}`;
  const navigate = useNavigate();

  return (
    <div
      className={
        props.focusIndex === props.item.name ? focusStyle : defaultStyle
      }
      onClick={() => {
        props.setFocusIndex(props.item.name);
        navigate(props.item.link);
        console.log(props.item.link);
      }}
    >
      <div className={classes.icon}>{props.item.icon}</div>
      <div> {props.item.name}</div>
    </div>
  );
}

export default MenuItem;
