import * as mongoose from "mongoose";
import { STATUS } from "../../../client/src/globals";

const eventSchema = new mongoose.Schema(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trainee" }],
    title: { type: String, default: "" },
    venue: { type: String, default: "" },
    date: { type: Date, default: new Date() },
    startTime: { type: String, default: "" },
    endTime: { type: String, default: "" },
    description: { type: String, default: "" },
    new: { type: Boolean, default: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
