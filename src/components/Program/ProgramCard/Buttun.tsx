import React, { useState } from "react";

import classes from "./button.module.scss";
import Program from "../../../types/Program";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { IoMdUndo } from "react-icons/io";
import Swal from "sweetalert2";

type Props = {
  program: Program;
  setProgram: any;
};

function Buttun(props: Props) {
  const navigate = useNavigate();

  const handleFavorite = () => {
    props.setProgram({
      ...props.program,
      favoriteStudents: [...props.program.favoriteStudents, "Test user"],
    });
  };

  const handleUnfavorite = () => {
    props.setProgram({
      ...props.program,
      favoriteStudents: props.program.favoriteStudents.filter(
        (student) => student !== "Test user"
      ),
    });
  };

  const handleNotStudent = (user: any) => {
    let alertText;
    if (!user) {
      alertText = "You need to login to favorite for this program";
    }
    alertText = "You need to be a student to favorite for this program";

    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: `${alertText}`,
      footer: `<a style={{testDecoration: "none"}} href='${""}'>Go to login page</a>`,
    });
  };

  // check user
  if (false) {
    if (!props.program.favoriteStudents.includes("Test user")) {
      return (
        <div className={classes.container}>
          <div className={classes.button} onClick={handleFavorite}>
            <GoPlus />
          </div>
          <div className={classes.count}>
            {props.program.favoriteStudents.length}
          </div>
        </div>
      );
    }
    return (
      <div className={classes.container}>
        <div className={classes.button} onClick={handleUnfavorite}>
          <IoMdUndo />
        </div>
        <div className={classes.count}>
          {props.program.favoriteStudents.length}
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.button} onClick={handleNotStudent}>
        <GoPlus />
      </div>
      <div className={classes.count}>
        {props.program.favoriteStudents.length}
      </div>
    </div>
  );
}

export default Buttun;
