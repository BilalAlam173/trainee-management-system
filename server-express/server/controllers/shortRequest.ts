import * as jwt from "jsonwebtoken";

import ShortLeave from "../models/shortLeave";
import BaseCtrl from "./base";

class ShortLeaveCtrl extends BaseCtrl {
  model = ShortLeave;
}

export default ShortLeaveCtrl;
