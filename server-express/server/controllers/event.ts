import * as jwt from "jsonwebtoken";

import Event from "../models/event";
import BaseCtrl from "./base";

class EventCtrl extends BaseCtrl {
  model = Event;

  getAll = async (req, res) => {
    try {
      const docs = await this.model.find({}).populate("participants");
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
        .populate("participants");
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
}

export default EventCtrl;
