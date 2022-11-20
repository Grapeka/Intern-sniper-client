import Company from "./Company";
import Timeline from "./Timeline";

interface Program {
  programId: String | null;
  programName: String;
  ownerOfProgram: Company;
  timeline: Timeline[];
  programPicture: String[];
  programWebsite: String;
  favoriteStudents: String[] | null;
  relatedField: String[];
  programType: String;
}

export default Program;
