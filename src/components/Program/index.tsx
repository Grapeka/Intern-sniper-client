import React, { useState, useEffect } from "react";

import classes from "./index.module.scss";
import ProgramType from "../../types/Program";
import ProgramCard from "./ProgramCard/ProgramCard";
import Timeline from "./Timeline";

type Props = {
  pg: ProgramType;
};

function Program(props: Props) {
  const [program, setProgram] = useState<ProgramType>(props.pg);

  return (
    <div className={classes.container}>
      <ProgramCard program={program} setProgram={setProgram} />
      <Timeline timeline={program.timeline} />
    </div>
  );
}

export default Program;
