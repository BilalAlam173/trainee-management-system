"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const announcement_1 = require("../models/announcement");
const base_1 = require("./base");
class AnnouncementCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = announcement_1.default;
    }
}
exports.default = AnnouncementCtrl;
//# sourceMappingURL=announcement.js.map