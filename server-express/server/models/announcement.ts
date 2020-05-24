import * as mongoose from "mongoose";
import { STATUS } from "../../../client/src/globals";

const announcementSchema = new mongoose.Schema(
  {
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    subject: Boolean,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;
