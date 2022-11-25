import User from "./User";

interface Student extends User {
  firstName: string;
  lastName: string;
  studyingYear: number;
  interestedField: string[];
  favoriteProgram: string[] | null;
  university: string;
}

export default Student;
