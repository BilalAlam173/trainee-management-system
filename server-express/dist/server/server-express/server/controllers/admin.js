"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("../models/admin");
const base_1 = require("./base");
const jwt = require("jsonwebtoken");
class AdminCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = admin_1.default;
        this.login = (req, res) => {
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
}
exports.default = AdminCtrl;
//# sourceMappingURL=admin.js.map