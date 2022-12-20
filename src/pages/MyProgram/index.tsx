import React, { useState, useEffect, useContext } from 'react';

import AppPage from '../../layouts/AppPage';
import ProgramType from '../../types/Program';
import Program from '../../components/Program';
import classes from './index.module.scss';
import { AuthContext } from '../../providers/authProvider';

function MyProgram() {
  const [programs, setPrograms] = useState<[ProgramType] | []>([]);
  const context = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/programs/issued`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + context?.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  if (programs === null) {
    return (
      <AppPage>
        <div className={classes.content}>
          <span>You don't have any listing program...</span>
        </div>
      </AppPage>
    );
  }

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

export default MyProgram;
