import Company from "./Company";
import Timeline from "./Timeline";

interface Program {
  _id: string | null;
  programName: String;
  ownerOfProgram: [Company];
  timeline: Timeline[];
  programPicture: String[];
  programWebsite: String;
  favoriteStudents: String[];
  relatedField: String[];
  programType: String;
}

export default Program;
