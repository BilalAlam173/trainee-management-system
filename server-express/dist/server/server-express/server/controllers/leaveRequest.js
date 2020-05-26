"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const leaveRequest_1 = require("../models/leaveRequest");
const base_1 = require("./base");
class leaveRequestCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = leaveRequest_1.default;
        this.getAll = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate("trainee");
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Get by id
        this.get = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model
                    .findOne({ _id: req.params.id })
                    .populate("trainee");
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = leaveRequestCtrl;
//# sourceMappingURL=leaveRequest.js.map