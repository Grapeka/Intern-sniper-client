import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../providers/authProvider";
import AppPage from "../../layouts/AppPage";
import ProgramType from "../../types/Program";
import Program from "../../components/Program";
import classes from "./index.module.scss";

function Favorite() {
  const [programs, setPrograms] = useState<[ProgramType] | []>([]);
  const context = useContext(AuthContext);

  console.log("programs", programs);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/programs/favorited`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("programs", data);
        setPrograms(data);
      });
  }, []);

  return (
    <AppPage>
      <div className={classes.content}>
        {programs.map((pg, index) => {
          return <Program pg={pg} key={index} />;
        })}
      </div>
    </AppPage>
  );
}

export default Favorite;
