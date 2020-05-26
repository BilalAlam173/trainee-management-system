"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const trainee_1 = require("../models/trainee");
const base_1 = require("./base");
class TraineeCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = trainee_1.default;
        this.login = (req, res) => {
            this.model.findOne({ pno: req.body.pno }, (err, trainee) => {
                if (!trainee) {
                    return res.sendStatus(403);
                }
                trainee.comparePassword(req.body.password, (error, isMatch) => {
                    if (!isMatch) {
                        return res.sendStatus(403);
                    }
                    const token = jwt.sign({ trainee }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                    res.status(200).json({ token, user: trainee });
                });
            });
        };
    }
}
exports.default = TraineeCtrl;
//# sourceMappingURL=trainee.js.map