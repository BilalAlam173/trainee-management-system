import * as jwt from "jsonwebtoken";

import Trainee from "../models/trainee";
import BaseCtrl from "./base";

class TraineeCtrl extends BaseCtrl {
  model = Trainee;

  login = (req, res) => {
    this.model.findOne({ pno: req.body.pno }, (err, trainee) => {
      if (!trainee) {
        return res.sendStatus(403);
      }
      trainee.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) {
          return res.sendStatus(403);
        }
        const token = jwt.sign({ trainee }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token });
      });
    });
  };
}

export default TraineeCtrl;
