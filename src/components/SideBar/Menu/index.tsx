import React, { useState } from "react";

import classes from "./index.module.scss";
import MenuItem from "./MenuItem";
import User from "../../../types/User";

import { FiHome } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbStar, TbDatabase } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { BsBookmark, BsListCheck } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const studentMenu = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "Most poppular", link: "/popular", icon: <HiOutlineLightningBolt /> },
  { name: "Favorite", link: "/favorite", icon: <TbStar /> },
  { name: "Profile", link: "/profile", icon: <FiUser /> },
];

const companyMenu = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "Most poppular", link: "/popular", icon: <HiOutlineLightningBolt /> },
  { name: "My program", link: "/myProgram", icon: <BsBookmark /> },
  {
    name: "Create program",
    link: "/createProgram",
    icon: <MdOutlineCreateNewFolder />,
  },
  { name: "Profile", link: "/profile", icon: <FiUser /> },
];

const directorMenu = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "Most poppular", link: "/popular", icon: <HiOutlineLightningBolt /> },
  { name: "Validate", link: "/validate", icon: <BsListCheck /> },
  { name: "Transaction", link: "/transaction", icon: <TbDatabase /> },
];

const visitorMenu = [
  { name: "55555", link: "/", icon: <FiHome /> },
  { name: "Most poppular", link: "/popular", icon: <HiOutlineLightningBolt /> },
  { name: "Favorite", link: "/login", icon: <TbStar /> },
  { name: "Profile", link: "/login", icon: <FiUser /> },
];

type Props = {
  user: User;
};

function Menu(props: Props) {
  const [focusIndex, setFocusIndex] = useState("Home");

  console.log("props.user", props.user);

  if (props.user !== null) {
    switch (props.user.role) {
      case "Student": {
        return (
          <div className={classes.container}>
            {studentMenu.map((item, index) => {
              return (
                <MenuItem
                  item={item}
                  key={index}
                  focusIndex={focusIndex}
                  setFocusIndex={setFocusIndex}
                />
              );
            })}
          </div>
        );
      }
      case "Company": {
        return (
          <div className={classes.container}>
            {companyMenu.map((item, index) => {
              return (
                <MenuItem
                  item={item}
                  key={index}
                  focusIndex={focusIndex}
                  setFocusIndex={setFocusIndex}
                />
              );
            })}
          </div>
        );
      }
      case "Director": {
        return (
          <div className={classes.container}>
            {directorMenu.map((item, index) => {
              return (
                <MenuItem
                  item={item}
                  key={index}
                  focusIndex={focusIndex}
                  setFocusIndex={setFocusIndex}
                />
              );
            })}
          </div>
        );
      }

      default: {
        return (
          <div className={classes.container}>
            {visitorMenu.map((item, index) => {
              return (
                <MenuItem
                  item={item}
                  key={index}
                  focusIndex={focusIndex}
                  setFocusIndex={setFocusIndex}
                />
              );
            })}
          </div>
        );
      }
    }
  }
  return (
    <div className={classes.container}>
      {visitorMenu.map((item, index) => {
        return (
          <MenuItem
            item={item}
            key={index}
            focusIndex={focusIndex}
            setFocusIndex={setFocusIndex}
          />
        );
      })}
    </div>
  );
}

export default Menu;
