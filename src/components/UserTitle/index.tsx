import React from "react";

import User from "../../types/User";
import classes from "./index.module.scss";
import Student from "../../interfaces/Student";
import Company from "../../interfaces/Company";
import Director from "../../interfaces/Director";

import Avatar from '../Avatar'

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
            <Avatar size="sm" border imageUrl="https://cdn-icons-png.flaticon.com/512/188/188379.png" /> 
          </div>
        );
      }
      case "Company": {
        const company = props.user as Company;
        return (
          <div className={classes.container}>
            <div>{company.companyName}</div>
            <Avatar size="sm" border imageUrl="https://cdn-icons-png.flaticon.com/512/188/188379.png" /> 
          </div>
        );
      }
      case "Director": {
        const director = props.user as Director;
        return (
          <div className={classes.container}>
            <div>{director.firstName}</div>
            <Avatar size="sm" border imageUrl="https://cdn-icons-png.flaticon.com/512/188/188379.png" /> 
          </div>
        );
      }
      default: {
        return (
          <div className={classes.container}>
            <div>Visitor</div>
            <Avatar size="sm" border imageUrl="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5neknqovdb6hesko5h0c8jbr36-20180130131031.Medi.jpeg" />
          </div>
        );
      }
    }
  }
  return (
    <div className={classes.container}>
      <div>Visitor</div>
      <Avatar size="sm" border imageUrl="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5neknqovdb6hesko5h0c8jbr36-20180130131031.Medi.jpeg" />
    </div>
  );
}

export default UserTitle;
