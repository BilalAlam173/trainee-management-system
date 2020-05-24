import * as mongoose from "mongoose";
import { USER_ROLES } from "../../../client/src/globals";
import * as bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    role: { type: USER_ROLES, default: USER_ROLES.ADMIN },
  },
  {
    timestamps: true,
  }
);
// Before saving the trainee, hash the password
adminSchema.pre("save", function (next) {
  const trainee = this;
  if (!trainee.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(trainee.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      trainee.password = hash;
      next();
    });
  });
});

adminSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Omit the password when returning a trainee
adminSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  },
});
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
