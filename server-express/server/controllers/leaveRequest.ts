import * as jwt from "jsonwebtoken";

import leaveRequest from "../models/leaveRequest";
import BaseCtrl from "./base";

class leaveRequestCtrl extends BaseCtrl {
  model = leaveRequest;

  getAll = async (req, res) => {
    try {
      const docs = await this.model.find({}).populate("trainee");
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
        .populate("trainee");
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
}

export default leaveRequestCtrl;
