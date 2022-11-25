import classes from "./programCard.module.scss";

import ImageShow from "./ImageShow";
import Program from "../../../types/Program";
import Buttun from "./Buttun";

type Props = {
  program: Program;
  setProgram: any;
};

function ProgramCard(props: Props) {
  return (
    <div className={classes.programCard}>
      <div className={classes.topSection}>
        <h2 className={classes.title}>{props.program.programName}</h2>
        <div className={classes.buttonBox}>
          <Buttun program={props.program} setProgram={props.setProgram} />
        </div>
      </div>
      <div className={classes.middleSection}>
        <div className={classes.description}>
          <span className={classes.descriptionItem}>
            {`Company: ${props.program.ownerOfProgram.companyName},`}
          </span>
          <div className={classes.descriptionItem}>
            {`Program type: ${props.program.programType}, `}
          </div>
          <span className={classes.descriptionItem}>
            {`Paid: ${props.program.paid} `}
          </span>
        </div>
        <div className={classes.description}>
          <div className={classes.descriptionItem}>
            {`Related fields: `}
            {props.program.relatedField.map((field: String, index: number) => {
              return (
                <span style={{ marginLeft: "5px" }}>
                  {index + 1 !== props.program.relatedField.length
                    ? `${field},`
                    : `${field}`}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.bottomSection}>
        <ImageShow images={props.program.programPicture} />
      </div>
    </div>
  );
}

export default ProgramCard;
