import * as jwt from "jsonwebtoken";

import Event from "../models/event";
import BaseCtrl from "./base";

class EventCtrl extends BaseCtrl {
  model = Event;
}

export default EventCtrl;
