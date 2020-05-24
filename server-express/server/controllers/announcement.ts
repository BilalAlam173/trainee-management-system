import * as jwt from "jsonwebtoken";

import Announcement from "../models/announcement";
import BaseCtrl from "./base";

class AnnouncementCtrl extends BaseCtrl {
  model = Announcement;
}

export default AnnouncementCtrl;
