import Admin from "../models/admin";
import BaseCtrl from "./base";
import * as jwt from "jsonwebtoken";

class AdminCtrl extends BaseCtrl {
  model = Admin;
  login = (req, res) => {
    this.model.findOne({ pno: req.body.username }, (err, trainee) => {
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

export default AdminCtrl;
