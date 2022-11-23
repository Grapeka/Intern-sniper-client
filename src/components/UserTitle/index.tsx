import React from "react";

import User from "../../types/User";
import classes from "./index.module.scss";
import Student from "../../interfaces/Student";
import Company from "../../interfaces/Company";
import Director from "../../interfaces/Director";

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
            <div className={classes.circle}>
              <div className={classes.imgBox}>
                <img
                  className={classes.img}
                  src={
                    props.user.profilePicture !== ""
                      ? props.user.profilePicture?.toString()
                      : "https://netstorage-legit.akamaized.net/images/vllkyt65lmfgmd5f2.jpg?imwidth=900"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      }
      case "Company": {
        const company = props.user as Company;
        return (
          <div className={classes.container}>
            <div>{company.companyName}</div>
            <div className={classes.circle}>
              <div className={classes.imgBox}>
                <img
                  className={classes.img}
                  src={"https://cdn-icons-png.flaticon.com/512/188/188379.png"}
                  alt="company img"
                />
              </div>
            </div>
          </div>
        );
      }
      case "Director": {
        const director = props.user as Director;
        return (
          <div className={classes.container}>
            <div>{director.firstName}</div>
            <div className={classes.circle}>
              <div className={classes.imgBox}>
                <img
                  className={classes.img}
                  src={
                    "https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
                  }
                  alt="Director img"
                />
              </div>
            </div>
          </div>
        );
      }
      default: {
        return (
          <div className={classes.container}>
            <div>Visitor</div>
            <div className={classes.circle}>
              <div className={classes.imgBox}>
                <img
                  className={classes.img}
                  src={
                    "https://netstorage-legit.akamaized.net/images/vllkyt65lmfgmd5f2.jpg?imwidth=900"
                  }
                  alt="Visitor img"
                />
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return (
    <div className={classes.container}>
      <div>Visitor</div>
      <div className={classes.circle}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src={
              "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5neknqovdb6hesko5h0c8jbr36-20180130131031.Medi.jpeg"
            }
            alt="Visitor img"
          />
        </div>
      </div>
    </div>
  );
}

export default UserTitle;
