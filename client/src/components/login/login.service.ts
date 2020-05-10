import { USER_ROLES } from "../../globals";
import { TraineeService } from "../trainee-list/trainee-list.service";
import { Trainee } from "../../services/data.service";

export type Credential = {
  username: string;
  password: string;
  role: USER_ROLES;
};
export class LoginService {
  static submitLogin(cred: Credential): string | void {
    const { username, password, role } = cred;
    const admins = [
      "course_officer",
      "joto",
      "dean",
      "cpt_training",
      "dpty_cmdt",
    ];
    const trainee: Trainee = TraineeService.getTrainee(username);

    switch (role) {
      case USER_ROLES.ADMIN:
        if (admins.includes(username) && password === "test123")
          return "passed";
        break;
      case USER_ROLES.MEDICAL_ADMIN:
        if (username === "medical_admin1" && password === "test123")
          return "passed";
        break;
      case USER_ROLES.APPOINTMENT_HOLDER:
        if (username === "appointee1" && password === "test123")
          return "passed";
        break;
      case USER_ROLES.TRAINEE:
        if (trainee && trainee.password == password) return "passed";
        break;
      default:
        throw new Error("Incorrect Credentials");
    }
  }
}
