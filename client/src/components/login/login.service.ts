import { USER_ROLES, SERVER_URL, ADMINS } from "../../globals";
import { TraineeService } from "../trainee-list/trainee-list.service";
import { Trainee } from "../../services/data.service";
import axios from "axios";

export type Credential = {
  username: string;
  password: string;
  role: USER_ROLES;
};
export class LoginService {
  static logout = () => {
    localStorage.clear();
    window.location.href = window.location.origin + "/";
  };

  static submitLogin(cred: Credential): Promise<any> {
    let url: string;
    let payload;
    if (ADMINS.includes(cred.role)) {
      url = SERVER_URL + "admin/login";
      payload = {
        username: cred.username,
        password: cred.password,
      };
    } else {
      url = SERVER_URL + "trainee/login";
      payload = {
        pno: cred.username,
        password: cred.password,
      };
    }
    return axios.post(url, payload).then((res: any) => {
      localStorage.setItem("token", res.data?.token);
      localStorage.setItem("user", JSON.stringify(res.data?.user));
      localStorage.setItem("isTrainee", res.data?.isTrainee);
    });
  }
}
