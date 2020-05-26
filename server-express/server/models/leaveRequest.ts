import * as mongoose from "mongoose";
import { STATUS, REQUEST_TYPE } from "../../../client/src/globals";

const leaveRequestSchema = new mongoose.Schema(
  {
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
    type: { type: REQUEST_TYPE, default: REQUEST_TYPE.OUTSTATION },
    status: { type: STATUS, default: STATUS.PENDING },
  },
  {
    timestamps: true,
  }
);

const LeaveRequest = mongoose.model("LeaveRequest", leaveRequestSchema);

export default LeaveRequest;
