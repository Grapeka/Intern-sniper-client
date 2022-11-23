import User from "./User";
import ApprovalTx from "./ApprovalTx";

interface Director extends User {
  firstName: String;
  lastName: String;
  transactions: ApprovalTx[] | null;
}

export default Director;
