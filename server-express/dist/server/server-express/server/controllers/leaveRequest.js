"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leaveRequest_1 = require("../models/leaveRequest");
const base_1 = require("./base");
class leaveRequestCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = leaveRequest_1.default;
    }
}
exports.default = leaveRequestCtrl;
//# sourceMappingURL=leaveRequest.js.map