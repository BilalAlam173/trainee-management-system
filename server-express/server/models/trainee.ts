import * as bcrypt from "bcryptjs";
import * as mongoose from "mongoose";
import { RANKS, USER_ROLES } from "../../../client/src/globals";

const traineeSchema = new mongoose.Schema(
  {
    pno: String,
    password: String,
    rank: String,
    name: String,
    division: String,
    batch: String,
    mobile: String,
    status: String,
    statusReason: String,
    role: {
      type: USER_ROLES,
      default: USER_ROLES.TRAINEE,
      enum: [USER_ROLES.TRAINEE],
    },
  },
  {
    timestamps: true,
  }
);

// Before saving the trainee, hash the password
traineeSchema.pre("save", function (next) {
  const trainee = this;
  if (!trainee.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    console.log(trainee.password);
    bcrypt.hash(trainee.password || "test123", salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      trainee.password = hash;
      next();
    });
  });
});

traineeSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Omit the password when returning a trainee
traineeSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  },
});

const Trainee = mongoose.model("Trainee", traineeSchema);

export default Trainee;
