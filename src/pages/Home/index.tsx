import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../providers/authProvider";

import AppPage from "../../layouts/AppPage";
import User from "../../types/User";
import ProgramType from "../../types/Program";
import Program from "../../components/Program";
import classes from "./index.module.scss";

function Home() {
  const [user, setUser] = useState(null);
  const [programs, setPrograms] = useState([]);
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log("context", context);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/programs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export default Home;
