import Admin from "../models/admin";
import BaseCtrl from "./base";
import * as jwt from "jsonwebtoken";

class AdminCtrl extends BaseCtrl {
  model = Admin;
  login = (req, res) => {
    this.model.findOne({ username: req.body.username }, (err, admin) => {
      if (!admin) {
        return res.sendStatus(403);
      }
      admin.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) {
          return res.sendStatus(403);
        }
        const token = jwt.sign({ admin }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token, user: admin });
      });
    });
  };
}

export default AdminCtrl;
