"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const globals_1 = require("../../../client/src/globals");
const leaveRequestSchema = new mongoose.Schema({
    trainee: { type: mongoose.Schema.Types.ObjectId, ref: "Trainee" },
    leaveAmount: { type: Number, default: 0 },
    wef: { type: Date, default: new Date() },
    leavesAvailed: { type: Number, default: 0 },
    reason: { type: String, default: "" },
    address: { type: String, default: "" },
    date: { type: Date, default: new Date() },
    courseOfficerRemarks: { type: String, default: "" },
    jotoRemarks: { type: String, default: "" },
    deanRemarks: { type: String, default: "" },
    captainRemarks: { type: String, default: "" },
    type: { type: globals_1.REQUEST_TYPE, default: globals_1.REQUEST_TYPE.OUTSTATION },
    status: { type: globals_1.STATUS, default: globals_1.STATUS.PENDING },
}, {
    timestamps: true,
});
const LeaveRequest = mongoose.model("LeaveRequest", leaveRequestSchema);
exports.default = LeaveRequest;
//# sourceMappingURL=leaveRequest.js.map