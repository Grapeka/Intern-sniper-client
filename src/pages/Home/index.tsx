import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../providers/authProvider";

import AppPage from "../../layouts/AppPage";
import User from "../../types/User";
import ProgramType from "../../types/Program";
import Program from "../../components/Program";
import classes from "./index.module.scss";

// const dummyCompany = {
//   companyName: "Company1",
// };

// const dummyProgram = [
//   {
//     programId: "1",
//     programName: "Sooldity internship program",
//     ownerOfProgram: dummyCompany,
//     timeline: [
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name2",
//         startDate: "Start Date2",
//         endDate: "End Dat2",
//         status: "Status2",
//       },
//     ],
//     programPicture: [
//       "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/01/accenture.jpg",
//     ],
//     programWebsite: "https://www.google.com/",
//     favoriteStudents: ["Student1", "Student2"],
//     relatedField: [
//       "Software Engineering",
//       "Computer Science",
//       "Fullstack developer",
//     ],
//     programType: 1,
//     paid: true,
//   },
//   {
//     programId: "2",
//     programName: "Abudabe internship program",
//     ownerOfProgram: dummyCompany,
//     timeline: [
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name2",
//         startDate: "Start Date2",
//         endDate: "End Dat2",
//         status: "Status2",
//       },
//     ],
//     programPicture: [
//       "https://media.glassdoor.com/l/bf/20/14/58/main-accenture-office.jpg",
//     ],
//     programWebsite: "https://www.google.com/",
//     favoriteStudents: ["Student1", "Student2"],
//     relatedField: ["Software Engineering", "Computer Science"],
//     programType: 1,
//     paid: true,
//   },
//   {
//     programId: "3",
//     programName: "Sooldity internship program",
//     ownerOfProgram: dummyCompany,
//     timeline: [
//       {
//         eventName: "Event Name",
//         startDate: "Start Date",
//         endDate: "End Date",
//         status: "Status",
//       },
//       {
//         eventName: "Event Name2",
//         startDate: "Start Date2",
//         endDate: "End Dat2",
//         status: "Status2",
//       },
//     ],
//     programPicture: [
//       "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/01/accenture.jpg",
//     ],
//     programWebsite: "https://www.google.com/",
//     favoriteStudents: ["Student1", "Student2"],
//     relatedField: [
//       "Software Engineering",
//       "Computer Science",
//       "Fullstack developer",
//     ],
//     programType: 1,
//     paid: true,
//   },
// ];

type Props = {
  user: User;
};

function Home() {
  const [user, setUser] = useState(null);
  const [programs, setPrograms] = useState([]);
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log("context", context);

    // fetch(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${context?.token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("setUser", data);
    //     setUser(data);
    //   });

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
    <AppPage user={user}>
      <div className={classes.content}>
        {programs.map((pg, index) => {
          return <Program pg={pg} key={index} />;
        })}
      </div>
    </AppPage>
  );
}

export default Home;
