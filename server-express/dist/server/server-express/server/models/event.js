"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trainee" }],
    title: { type: String, default: "" },
    venue: { type: String, default: "" },
    date: { type: Date, default: new Date() },
    startTime: { type: Date, default: new Date() },
    endTime: { type: Date, default: new Date() },
    description: { type: String, default: "" },
    new: { type: Boolean, default: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
}, {
    timestamps: true,
});
const Event = mongoose.model("Event", eventSchema);
exports.default = Event;
//# sourceMappingURL=event.js.map