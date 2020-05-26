import * as jwt from "jsonwebtoken";

import ShortLeave from "../models/shortLeave";
import BaseCtrl from "./base";

class ShortLeaveCtrl extends BaseCtrl {
  model = ShortLeave;
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

export default ShortLeaveCtrl;
