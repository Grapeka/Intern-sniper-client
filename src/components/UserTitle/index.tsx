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
              imageUrl={`${import.meta.env.BASE_URL}/image/${
                student.profilePicture
              }`}
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
              imageUrl={`${import.meta.env.BASE_URL}/image/${
                company.profilePicture
              }`}
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
              imageUrl={`${import.meta.env.BASE_URL}/image/director.png`}
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
              imageUrl={`${import.meta.env.BASE_URL}/image/visitor.png`}
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
        imageUrl={`${import.meta.env.BASE_URL}/image/visitor.png`}
      />
    </div>
  );
}

export default UserTitle;
