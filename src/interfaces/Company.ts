import Location from "./Location";
import User from "./User";

interface Company extends User {
  companyName: string;
  issuedProgram: string[] | null;
  phoneNumber: string;
  province: string
  country: string
  validateStatus: boolean;
}

export default Company;
