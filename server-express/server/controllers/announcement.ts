import * as jwt from "jsonwebtoken";

import Announcement from "../models/announcement";
import BaseCtrl from "./base";

class AnnouncementCtrl extends BaseCtrl {
  model = Announcement;

  getAll = async (req, res) => {
    try {
      const docs = await this.model.find({}).populate("admin");
      res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  // Get by id
  get = async (req, res) => {
    try {
      const obj = await this.model
        .findOne({ _id: req.params.id })
        .populate("admin");
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
}

export default AnnouncementCtrl;
