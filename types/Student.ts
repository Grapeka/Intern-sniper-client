import User from "./User";

interface Student extends User {
  firstName: String;
  lastName: String;
  studyingYear: number;
  interestedField: String[];
  favoriteProgram: String[] | null;
  university: String;
}

export default Student;
