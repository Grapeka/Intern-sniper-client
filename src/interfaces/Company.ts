import User from './User';

interface Company extends User {
  companyName: string;
  issuedProgram: string[] | null;
  phoneNumber: string;
  location: { country: string; province: string };
  validateStatus: boolean;
}

export default Company;
