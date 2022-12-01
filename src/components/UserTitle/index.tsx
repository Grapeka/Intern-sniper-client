import React from "react";

import User from "../../types/User";
import classes from "./index.module.scss";
import Student from "../../interfaces/Student";
import Company from "../../interfaces/Company";
import Director from "../../interfaces/Director";

import Avatar from "../Avatar";

type Props = {
  user: User;
};

function UserTitle(props: Props) {
  if (props.user) {
    switch (props.user.role) {
      case "Student": {
        const student = props.user as Student;

        return (
          <div className={classes.container}>
            <div>{student.firstName}</div>
            <Avatar
              size="sm"
              border
              imageUrl={
                student.profilePicture !== null && student.profilePicture !== ""
                  ? import.meta.env.VITE_BACKEND_URL +
                    "/image/" +
                    student.profilePicture
                  : import.meta.env.VITE_BACKEND_URL +
                    "/image/1669888950843-name-defaultsuer.jpeg"
              }
            />
          </div>
        );
      }
      case "Company": {
        const company = props.user as Company;
        return (
          <div className={classes.container}>
            <div>{company.companyName}</div>
            <Avatar
              size="sm"
              border
              imageUrl={
                company.profilePicture !== null && company.profilePicture !== ""
                  ? import.meta.env.VITE_BACKEND_URL +
                    "/image/" +
                    company.profilePicture
                  : import.meta.env.VITE_BACKEND_URL +
                    "/image/1669888950843-name-defaultsuer.jpeg"
              }
            />
          </div>
        );
      }
      case "Director": {
        const director = props.user as Director;
        return (
          <div className={classes.container}>
            <div>{director.firstName}</div>
            <Avatar
              size="sm"
              border
              imageUrl={
                import.meta.env.VITE_BACKEND_URL +
                "/image/1669888950843-name-defaultsuer.jpeg"
              }
            />
          </div>
        );
      }
      default: {
        return (
          <div className={classes.container}>
            <div>Visitor</div>
            <Avatar
              size="sm"
              border
              imageUrl={
                import.meta.env.VITE_BACKEND_URL +
                "/image/1669888950843-name-defaultsuer.jpeg"
              }
            />
          </div>
        );
      }
    }
  }
  return (
    <div className={classes.container}>
      <div>Visitor</div>
      <Avatar
        size="sm"
        border
        imageUrl={
          import.meta.env.VITE_BACKEND_URL +
          "/image/1669888950843-name-defaultsuer.jpeg"
        }
      />
    </div>
  );
}

export default UserTitle;
