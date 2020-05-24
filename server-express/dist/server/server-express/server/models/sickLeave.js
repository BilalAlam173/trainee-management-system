"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const globals_1 = require("../../../client/src/globals");
const sickRequestSchema = new mongoose.Schema({
    trainee: { type: mongoose.Schema.Types.ObjectId, ref: "Trainee" },
    punishment: Boolean,
    reason: String,
    smoRemarks: String,
    timeIn: Date,
    timeout: Date,
    date: Date,
    status: { type: globals_1.STATUS, default: globals_1.STATUS.PENDING },
}, {
    timestamps: true,
});
const SickLeave = mongoose.model("SickLeave", sickRequestSchema);
exports.default = SickLeave;
//# sourceMappingURL=sickLeave.js.map