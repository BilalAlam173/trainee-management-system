import { USER_ROLES } from "../../globals";

export type Credential = {
  username: string;
  password: string;
  role: USER_ROLES;
};
export class LoginService {
  static submitLogin(cred: Credential): string {
    if (cred.username === "admin" && cred.password === "test123") {
      return "Passed";
    } else {
      throw new Error("Incorrect Password");
    }
  }
}
