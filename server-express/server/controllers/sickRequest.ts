import * as jwt from "jsonwebtoken";

import SickLeave from "../models/sickLeave";
import BaseCtrl from "./base";

class SickLeaveCtrl extends BaseCtrl {
  model = SickLeave;
}

export default SickLeaveCtrl;
