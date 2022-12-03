import React, { useState, useContext } from "react";

import classes from "./button.module.scss";
import { AuthContext } from "../../../providers/authProvider";
import Program from "../../../types/Program";
import { GoPlus } from "react-icons/go";
import { IoMdUndo } from "react-icons/io";
import Swal from "sweetalert2";

type Props = {
  program: Program;
  setProgram: React.Dispatch<any>;
};

function Buttun(props: Props) {
  const context = useContext(AuthContext);
  const handleFavorite = () => {
    props.setProgram({
      ...props.program,
      favoriteStudents: [
        ...props.program.favoriteStudents,
        context?.auth?.userId,
      ],
    });

    fetch(
      import.meta.env.VITE_BACKEND_URL +
        "/programs/favorite/" +
        props.program._id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context?.token}`,
        },
        body: JSON.stringify({
          favorite: true,
        }),
      }
    ).then((res) => {
      console.log("res", res);
    });
  };

  const handleUnfavorite = () => {
    props.setProgram({
      ...props.program,
      favoriteStudents: props.program.favoriteStudents.filter(
        (student) => student !== context?.auth?.userId
      ),
    });

    fetch(
      import.meta.env.VITE_BACKEND_URL +
        "/programs/favorite/" +
        props.program._id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context?.token}`,
        },
        body: JSON.stringify({
          favorite: false,
        }),
      }
    ).then((res) => {
      console.log("res", res);
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
      footer: `<a style={{testDecoration: "none"}} href='${
        import.meta.env.VITE_FRONTEND_URL + "/login"
      }'>Go to login page</a>`,
    });
  };

  // check user
  if (
    context?.auth?.userId !== null &&
    context?.auth?.userId !== undefined &&
    context?.auth?.role === "Student"
  ) {
    // alert(context.auth.userId);
    if (!props.program.favoriteStudents.includes(context.auth.userId)) {
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
        {props.program.favoriteStudents !== null
          ? props.program.favoriteStudents.length
          : 0}
      </div>
    </div>
  );
}

export default Buttun;
