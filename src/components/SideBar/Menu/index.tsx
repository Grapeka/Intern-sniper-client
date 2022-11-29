import React, { useState, useRef, useContext } from "react";

import classes from "./index.module.scss";
import MenuItem from "./MenuItem";
import User from "../../../types/User";

import { FiHome } from "react-icons/fi";
import { HiOutlineLightningBolt, HiOutlineLogout } from "react-icons/hi";
import { TbStar, TbDatabase } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { BsBookmark, BsListCheck } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {AuthContext} from "../../../providers/authProvider";

const directorMenu = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "Most popular", link: "/popular", icon: <HiOutlineLightningBolt /> },
  { name: "Validate", link: "/validate", icon: <BsListCheck /> },
  { name: "Transaction", link: "/transaction", icon: <TbDatabase /> },
  { name: "Logout", link: "/logout", icon: <HiOutlineLogout /> },
];

const visitorMenu = [
  { name: "Home", link: "/", icon: <FiHome /> },
  { name: "Most popular", link: "/popular", icon: <HiOutlineLightningBolt /> },
  { name: "Favorite", link: "/login", icon: <TbStar /> },
  { name: "Profile", link: "/login", icon: <FiUser /> },
];

type Props = {
  user: User;
};

function Menu(props: Props) {
  const context = useContext(AuthContext)

  const studentMenu = [
    { name: "Home", link: "/", icon: <FiHome /> },
    { name: "Most popular", link: "/popular", icon: <HiOutlineLightningBolt /> },
    { name: "Favorite", link: "/favorite", icon: <TbStar /> },
    { name: "Profile", link: `/profile/${context?.auth?.userId}`, icon: <FiUser /> },
    { name: "Logout", link: "/logout", icon: <HiOutlineLogout /> },
  ];

  const companyMenu = [
    { name: "Home", link: "/", icon: <FiHome /> },
    { name: "Most popular", link: "/popular", icon: <HiOutlineLightningBolt /> },
    { name: "My program", link: "/myProgram", icon: <BsBookmark /> },
    {
      name: "Create program",
      link: "/create-program",
      icon: <MdOutlineCreateNewFolder />,
    },
    { name: "Profile", link: `/profile/${context?.auth?.userId}`, icon: <FiUser /> },
    { name: "Logout", link: "/logout", icon: <HiOutlineLogout /> },
  ];

  if (props.user !== null) {
    switch (props.user.role) {
      case "Student": {
        return (
          <div className={classes.container}>
            {studentMenu.map((item, index) => {
              return <MenuItem item={item} key={index} />;
            })}
          </div>
        );
      }
      case "Company": {
        return (
          <div className={classes.container}>
            {companyMenu.map((item, index) => {
              return <MenuItem item={item} key={index} />;
            })}
          </div>
        );
      }
      case "Director": {
        return (
          <div className={classes.container}>
            {directorMenu.map((item, index) => {
              return <MenuItem item={item} key={index} />;
            })}
          </div>
        );
      }

      default: {
        return (
          <div className={classes.container}>
            {visitorMenu.map((item, index) => {
              return <MenuItem item={item} key={index} />;
            })}
          </div>
        );
      }
    }
  }
  return (
    <div className={classes.container}>
      {visitorMenu.map((item, index) => {
        return <MenuItem item={item} key={index} />;
      })}
    </div>
  );
}

export default Menu;
