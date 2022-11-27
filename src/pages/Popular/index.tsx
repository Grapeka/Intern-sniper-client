import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../providers/authProvider";
import AppPage from "../../layouts/AppPage";
import ProgramType from "../../types/Program";
import Program from "../../components/Program";
import classes from "./index.module.scss";

function Popular() {
  const [programs, setPrograms] = useState<[ProgramType] | []>([]);

  console.log("programs", programs);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/programs/popular`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
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

export default Popular;
