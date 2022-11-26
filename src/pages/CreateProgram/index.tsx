import React from "react";

import classes from "./index.module.scss";
import User from "../../types/User";
import FormInput from "../../components/FormInput";
import AppPage from "../../layouts/AppPage";

type Props = {
  user: User;
};

function CreateProgram(props: Props) {
  return (
    <AppPage user={null}>
      <div className={classes.page}>
        <FormInput title={"test"} type={"test"} variant={"standard"} />
      </div>
    </AppPage>
  );
}

export default CreateProgram;
