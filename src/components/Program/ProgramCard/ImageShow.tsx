import React from "react";

import classes from "./imageShow.module.scss";
import { AiOutlineLink } from "react-icons/ai";

type Props = {
  images: String[];
};

function ImageShow(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <a className={classes.overlay} href={""}>
          <div className={classes.link}>
            <AiOutlineLink />
            website
          </div>
        </a>
        <img
          className={classes.img}
          src={
            props.images[0] === undefined
              ? "https://media.glassdoor.com/l/74/3f/ec/bd/office.jpg"
              : import.meta.env.VITE_BACKEND_URL + "/image/" + props.images[0]
          }
        ></img>
      </div>
    </div>
  );
}

export default ImageShow;
