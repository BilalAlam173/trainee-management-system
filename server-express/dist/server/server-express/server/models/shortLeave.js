"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const globals_1 = require("../../../client/src/globals");
const shortRequestSchema = new mongoose.Schema({
    trainee: { type: mongoose.Schema.Types.ObjectId, ref: "Trainee" },
    leaveAmount: { type: Number, default: 0 },
    startTime: Date,
    endTime: Date,
    reason: String,
    date: Date,
    address: String,
    jotoRemarks: String,
    aJotoRemarks: String,
    courseOfficerRemarks: String,
    type: { type: globals_1.REQUEST_TYPE, default: globals_1.REQUEST_TYPE.SHORT },
    status: { type: globals_1.STATUS, default: globals_1.STATUS.PENDING },
}, {
    timestamps: true,
});
const ShortRequest = mongoose.model("ShortRequest", shortRequestSchema);
exports.default = ShortRequest;
//# sourceMappingURL=shortLeave.js.map