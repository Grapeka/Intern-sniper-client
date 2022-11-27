import { ClassNames } from "@emotion/react";
import classes from "./menuItem.module.scss";
import { useNavigate } from "react-router-dom";

interface item {
  name: string;
  link: string;
  icon: JSX.Element;
}

type Props = {
  item: item;
  focusIndex: string;
  setFocusIndex: React.Dispatch<React.SetStateAction<string>>;
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

        console.log(
          "props.item.name",
          props.item.name,
          "props.focusIndex",
          props.focusIndex
        );

        navigate(props.item.link);
      }}
    >
      <div className={classes.icon}>{props.item.icon}</div>
      <div> {props.item.name}</div>
    </div>
  );
}

export default MenuItem;
