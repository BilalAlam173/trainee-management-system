"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema({
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    header: { type: String, default: "" },
    message: { type: String, default: "" },
}, {
    timestamps: true,
});
const Announcement = mongoose.model("Announcement", announcementSchema);
exports.default = Announcement;
//# sourceMappingURL=announcement.js.map