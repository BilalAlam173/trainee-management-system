import * as bcrypt from "bcryptjs";
import * as mongoose from "mongoose";
import { RANKS, STATUS, REQUEST_TYPE } from "../../../client/src/globals";

const shortRequestSchema = new mongoose.Schema(
  {
    trainee: { type: mongoose.Schema.Types.ObjectId, ref: "Trainee" },
    leaveAmount: { type: Number, default: 0 },
    startTime: { type: String, default: "" },
    endTime: { type: String, default: "" },
    reason: { type: String, default: "" },
    date: { type: Date, default: new Date() },
    address: { type: String, default: "" },
    jotoRemarks: { type: String, default: "" },
    aJotoRemarks: { type: String, default: "" },
    courseOfficerRemarks: { type: String, default: "" },
    type: { type: REQUEST_TYPE, default: REQUEST_TYPE.SHORT },
    status: { type: STATUS, default: STATUS.PENDING },
  },
  {
    timestamps: true,
  }
);

const ShortRequest = mongoose.model("ShortRequest", shortRequestSchema);

export default ShortRequest;
