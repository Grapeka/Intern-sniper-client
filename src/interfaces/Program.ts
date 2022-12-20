import Company from "./Company";
import Timeline from "./Timeline";

interface Program {
  programId: string | null;
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
