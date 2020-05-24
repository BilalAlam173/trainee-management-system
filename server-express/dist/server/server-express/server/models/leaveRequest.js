"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const globals_1 = require("../../../client/src/globals");
const leaveRequestSchema = new mongoose.Schema({
    trainee: { type: mongoose.Schema.Types.ObjectId, ref: "Trainee" },
    leaveAmount: { type: Number, default: 0 },
    wef: Date,
    leavesAvailed: { type: Number, default: 0 },
    reason: String,
    address: String,
    date: Date,
    courseOfficerRemarks: String,
    jotoRemarks: String,
    deanRemarks: String,
    captainRemarks: String,
    status: { type: globals_1.STATUS, default: globals_1.STATUS.PENDING },
}, {
    timestamps: true,
});
const LeaveRequest = mongoose.model("LeaveRequest", leaveRequestSchema);
exports.default = LeaveRequest;
//# sourceMappingURL=leaveRequest.js.map