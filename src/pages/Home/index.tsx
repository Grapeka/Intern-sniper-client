import React, { useState, useEffect } from "react";

import AppPage from "../../layouts/AppPage";
import User from "../../types/User";
import ProgramType from "../../types/Program";
import Program from "../../components/Program";
import classes from "./index.module.scss";

const dummyCompany = {
  companyName: "Company1",
};

const dummyProgram = [
  {
    programId: "1",
    programName: "Sooldity internship program",
    ownerOfProgram: dummyCompany,
    timeline: [
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name2",
        startDate: "Start Date2",
        endDate: "End Dat2",
        status: "Status2",
      },
    ],
    programPicture: [
      "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/01/accenture.jpg",
    ],
    programWebsite: "https://www.google.com/",
    favoriteStudents: ["Student1", "Student2"],
    relatedField: [
      "Software Engineering",
      "Computer Science",
      "Fullstack developer",
    ],
    programType: 1,
    paid: true,
  },
  {
    programId: "2",
    programName: "Abudabe internship program",
    ownerOfProgram: dummyCompany,
    timeline: [
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name2",
        startDate: "Start Date2",
        endDate: "End Dat2",
        status: "Status2",
      },
    ],
    programPicture: [
      "https://media.glassdoor.com/l/bf/20/14/58/main-accenture-office.jpg",
    ],
    programWebsite: "https://www.google.com/",
    favoriteStudents: ["Student1", "Student2"],
    relatedField: ["Software Engineering", "Computer Science"],
    programType: 1,
    paid: true,
  },
  {
    programId: "3",
    programName: "Sooldity internship program",
    ownerOfProgram: dummyCompany,
    timeline: [
      {
        eventName: "Event Name",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
      },
      {
        eventName: "Event Name2",
        startDate: "Start Date2",
        endDate: "End Dat2",
        status: "Status2",
      },
    ],
    programPicture: [
      "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/01/accenture.jpg",
    ],
    programWebsite: "https://www.google.com/",
    favoriteStudents: ["Student1", "Student2"],
    relatedField: [
      "Software Engineering",
      "Computer Science",
      "Fullstack developer",
    ],
    programType: 1,
    paid: true,
  },
];

type Props = {
  user: User;
};

function Home() {
  const [user, setUser] = useState(null);
  const [programs, setPrograms] = useState(dummyProgram);

  return (
    <AppPage user={user}>
      <div className={classes.content}>
        {programs.map((pg, index) => {
          console.log(pg);

          return <Program pg={pg} key={index} />;
        })}
      </div>
    </AppPage>
  );
}

export default Home;
