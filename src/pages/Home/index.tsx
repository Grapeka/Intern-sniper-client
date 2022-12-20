import React, { useState, useEffect } from 'react';

import AppPage from '../../layouts/AppPage';
import Program from '../../components/Program';
import classes from './index.module.scss';

function Home() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/programs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('programs', data);
        setPrograms(data);
      });
  }, []);

  if (programs === null) {
    <AppPage>
      <div className={classes.content}>No program...</div>
    </AppPage>;
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

export default Home;
