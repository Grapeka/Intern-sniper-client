import React, { useState, useContext, useEffect } from "react";

import classes from "./index.module.scss";
import AppPage from "../../layouts/AppPage";
import Company from "../../interfaces/Company";
import { uploadImage } from "../../utils/image";
import { AuthContext } from "../../providers/authProvider";
import Swal from "sweetalert2";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import FormInput from "../../components/FormInput";

function CreateProgram() {
  const context = useContext(AuthContext);

  const [company, setCompany] = useState({} as Company);
  const [name, setName] = useState("");

  const [timeline, setTimeline] = useState([
    {
      eventName: "",
      startDate: "",
      endDate: "",
      status: "pending",
    },
  ]);
  const [paid, setPaid] = useState("paid");
  const [type, setType] = useState("INTERN");
  const [fields, setFields] = useState<any[]>([]);
  const [image, setImage] = useState<any>("");
  const [programUrl, setProgramUrl] = useState("");

  const handleCreateProgram = async () => {
    const filename = await uploadImage(image);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/programs/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context?.token}`,
      },
      body: JSON.stringify({
        id: context?.auth?.userId,
        programName: name,
        timeline: timeline,
        paid: paid === "paid" ? true : false,
        favoriteStudents: [],
        programType: type,
        relatedField: fields,
        programPicture: [filename.path],
        programWebsite: programUrl,
      }),
    });
  };

  useEffect(() => {
    console.log("context", context?.auth);

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/users/${context?.auth?.userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCompany(data as Company);

        console.log("data", data);

        if (!data.validateStatus) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: `You need to wait the director validate your company before creating a program`,
          });
        }
      });
  }, []);

  return (
    <AppPage>
      <div className={classes.content}>
        <div className={classes.container}>
          <div className={classes.head}>Create Program</div>
          <div className={classes.form}>
            {/* <div className={classes.group}>
              <div className={classes.title}>Program Name</div>
              <input
                className={classes.input}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div> */}
            <div className={classes.twoColumn}>
              <FormInput title="Program Name" type="text" variant="outlined" />
              <div className={classes.group}>
                <div className={classes.title}>Type</div>
                <select className={classes.select}>
                  <option
                    value="Internship"
                    onClick={() => {
                      setType("INTERN");
                    }}
                  >
                    Internship
                  </option>
                </select>
              </div>
            </div>

            <div className={classes.group}>
              <div className={classes.title}>Paid</div>
              <div className={classes.paidBox}>
                <div
                  className={classes.checkBoxItem}
                  onClick={() => {
                    setPaid("paid");
                  }}
                >
                  {paid === "paid" ? (
                    <RiCheckboxBlankCircleFill />
                  ) : (
                    <RiCheckboxBlankCircleLine />
                  )}
                  <div className={classes.label}>Paid</div>
                </div>
                <div
                  className={classes.checkBoxItem}
                  onClick={() => {
                    setPaid("unpaid");
                  }}
                >
                  {paid === "unpaid" ? (
                    <RiCheckboxBlankCircleFill />
                  ) : (
                    <RiCheckboxBlankCircleLine />
                  )}
                  <div className={classes.label}>Unpaid</div>
                </div>
              </div>
            </div>

            <div className={classes.group}>
              <div className={classes.title}>Timeline</div>
              {timeline.map((item, index) => {
                return (
                  <div className={classes.timeline} key={index}>
                    <FormInput title="Event Name" type="text" variant="outlined" />
                    <div className={classes.twoColumn}>
                      <FormInput title="Start Date" type="date" variant="outlined" />
                      <FormInput title="End Date" type="date" variant="outlined" />
                    </div>
                    {/* <div className={classes.lable}>Event name</div>
                    <input
                      className={classes.input}
                      type="text"
                      onChange={(e) => {
                        setTimeline((prev) => {
                          prev[index].eventName = e.target.value;
                          return prev;
                        });
                      }}
                    /> */}
                    {/* <div className={classes.label}>Start Date</div>
                    <input
                      className={classes.input}
                      type="date"
                      onChange={(e) => {
                        setTimeline((prev) => {
                          prev[index].startDate = e.target.value;
                          return prev;
                        });
                      }}
                    /> */}
                    {/* <div className={classes.label}>End Date</div>
                    <input
                      className={classes.input}
                      type="date"
                      onChange={(e) => {
                        setTimeline((prev) => {
                          prev[index].endDate = e.target.value;
                          return prev;
                        });
                      }}
                    /> */}
                  </div>
                );
              })}

              <div className={classes.manipulator}>
                <div
                  className={classes.addItem}
                  onClick={() => {
                    setTimeline([
                      ...timeline,
                      {
                        eventName: "",
                        startDate: "",
                        endDate: "",
                        status: "pending",
                      },
                    ]);
                  }}
                >
                  + Add Timeline
                </div>

                {timeline.length > 1 ? (
                  <div
                    className={classes.deleteItem}
                    onClick={() => {
                      setTimeline(timeline.slice(0, -1));
                    }}
                  >
                    - Delete timeline
                  </div>
                ) : null}
              </div>
            </div>

            <FormInput title="Program Link" type="text" variant="outlined" />
            {/* <div className={classes.group}>
              <div className={classes.title}>Program Link</div>
              <input
                className={classes.input}
                type="text"
                onChange={(e) => {
                  setProgramUrl(e.target.value);
                }}
              />
            </div> */}

            <div className={classes.group}>
              <div className={classes.title}>Related fields</div>
              <div className={classes.checlBox}></div>
              <div
                className={classes.checkBoxItem}
                onClick={() => {
                  if (fields.includes("Software engineering")) {
                    setFields(
                      fields.filter((item) => item !== "Software engineering")
                    );
                  } else {
                    setFields([...fields, "Software engineering"]);
                  }
                }}
              >
                {fields.includes("Software engineering") ? (
                  <RiCheckboxBlankCircleFill />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                <div className={classes.label}>Software engineering</div>
              </div>
              <div
                className={classes.checkBoxItem}
                onClick={() => {
                  if (fields.includes("Data science")) {
                    setFields(fields.filter((item) => item !== "Data science"));
                  } else {
                    setFields([...fields, "Data science"]);
                  }
                }}
              >
                {fields.includes("Data science") ? (
                  <RiCheckboxBlankCircleFill />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                <div className={classes.label}>Data science</div>
              </div>
              <div
                className={classes.checkBoxItem}
                onClick={() => {
                  if (fields.includes("UX/UI design")) {
                    setFields(fields.filter((item) => item !== "UX/UI design"));
                  } else {
                    setFields([...fields, "UX/UI design"]);
                  }
                }}
              >
                {fields.includes("UX/UI design") ? (
                  <RiCheckboxBlankCircleFill />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                <div className={classes.label}>UX/UI design</div>
              </div>{" "}
              <div
                className={classes.checkBoxItem}
                onClick={() => {
                  if (fields.includes("Management")) {
                    setFields(fields.filter((item) => item !== "Management"));
                  } else {
                    setFields([...fields, "Management"]);
                  }
                }}
              >
                {fields.includes("Management") ? (
                  <RiCheckboxBlankCircleFill />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                <div className={classes.label}>Management</div>
              </div>
            </div>

            <div className={classes.group}>
              <div className={classes.title}>Program image</div>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files !== null) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div
              className={classes.submit}
              onClick={() => {
                console.log("submit");
                console.log(
                  "name",
                  name,
                  "paid",
                  paid,
                  "type",
                  type,
                  "timeline",
                  timeline,
                  "fields",
                  fields,
                  "image",
                  image
                );

                handleCreateProgram();
              }}
            >
              Create program
            </div>
          </div>
        </div>
      </div>
    </AppPage>
  );
}

export default CreateProgram;
