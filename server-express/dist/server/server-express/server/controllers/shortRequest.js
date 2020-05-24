"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortLeave_1 = require("../models/shortLeave");
const base_1 = require("./base");
class ShortLeaveCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = shortLeave_1.default;
    }
}
exports.default = ShortLeaveCtrl;
//# sourceMappingURL=shortRequest.js.map