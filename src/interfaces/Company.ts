import Location from "./Location";
import User from "./User";

interface Company extends User {
  companyName: String;
  issuedProgram: String[] | null;
  phoneNumber: String;
  location: Location | null;
  validateStatus: boolean;
}

export default Company;
