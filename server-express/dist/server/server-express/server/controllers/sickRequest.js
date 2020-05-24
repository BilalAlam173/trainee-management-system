"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sickLeave_1 = require("../models/sickLeave");
const base_1 = require("./base");
class SickLeaveCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = sickLeave_1.default;
    }
}
exports.default = SickLeaveCtrl;
//# sourceMappingURL=sickRequest.js.map