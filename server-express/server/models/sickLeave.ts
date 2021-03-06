import * as bcrypt from "bcryptjs";
import * as mongoose from "mongoose";
import { RANKS, STATUS } from "../../../client/src/globals";

const sickRequestSchema = new mongoose.Schema(
  {
    trainee: { type: mongoose.Schema.Types.ObjectId, ref: "Trainee" },
    punishment: Boolean,
    reason: String,
    smoRemarks: String,
    timeIn: Date,
    timeout: Date,
    date: Date,
    status: { type: STATUS, default: STATUS.PENDING },
  },
  {
    timestamps: true,
  }
);

const SickLeave = mongoose.model("SickLeave", sickRequestSchema);

export default SickLeave;
