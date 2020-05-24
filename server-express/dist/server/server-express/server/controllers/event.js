"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../models/event");
const base_1 = require("./base");
class EventCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = event_1.default;
    }
}
exports.default = EventCtrl;
//# sourceMappingURL=event.js.map