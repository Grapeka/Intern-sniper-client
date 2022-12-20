import React from "react";

import classes from "./imageShow.module.scss";
import { AiOutlineLink } from "react-icons/ai";

type Props = {
  images: String[];
  link: String;
};

function ImageShow(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <a
          className={classes.overlay}
          target="_blank"
          href={props.link.toString()}
        >
          <div className={classes.link}>
            <AiOutlineLink />
            website
          </div>
        </a>
        <img
          className={classes.img}
          src={
            props.images[0] === undefined ||
            props.images === null ||
            props.images[0] === ""
              ? import.meta.env.VITE_BACKEND_URL +
                "/image/" +
                "1669550566842-name-accenture-1.png"
              : import.meta.env.VITE_BACKEND_URL + "/image/" + props.images[0]
          }
        ></img>
      </div>
    </div>
  );
}

export default ImageShow;
