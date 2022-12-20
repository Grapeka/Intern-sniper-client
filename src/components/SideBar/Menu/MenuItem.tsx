import { ClassNames } from "@emotion/react";
import classes from "./menuItem.module.scss";
import { useNavigate, Link } from "react-router-dom";

interface item {
  name: string;
  link: string;
  icon: JSX.Element;
}

type Props = {
  item: item;
};

function MenuItem(props: Props) {
  const defaultStyle = `${classes.item} ${classes.default}`;
  const focusStyle = `${classes.item} ${classes.active}`;

  const navigate = useNavigate();

  return (
    <div
      className={
        window.location.href ===
        import.meta.env.VITE_FRONTEND_URL + props.item.link
          ? focusStyle
          : defaultStyle
      }
      onClick={() => {
        navigate(props.item.link);
      }}
    >
      <div className={classes.icon}>{props.item.icon}</div>
      <div> {props.item.name}</div>
    </div>
  );
}

export default MenuItem;
