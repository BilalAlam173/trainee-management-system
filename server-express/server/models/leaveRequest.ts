import * as mongoose from "mongoose";
import { STATUS } from "../../../client/src/globals";

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
  status: { type: STATUS, default: STATUS.PENDING },
},{
  timestamps: true,
});

const LeaveRequest = mongoose.model("LeaveRequest", leaveRequestSchema);

export default LeaveRequest;
