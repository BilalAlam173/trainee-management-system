import * as jwt from "jsonwebtoken";

import leaveRequest from "../models/leaveRequest";
import BaseCtrl from "./base";

class leaveRequestCtrl extends BaseCtrl {
  model = leaveRequest;
}

export default leaveRequestCtrl;
