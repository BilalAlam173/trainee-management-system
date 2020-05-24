"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const globals_1 = require("../../../client/src/globals");
const bcrypt = require("bcryptjs");
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: globals_1.USER_ROLES, default: globals_1.USER_ROLES.ADMIN },
}, {
    timestamps: true,
});
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
exports.default = Admin;
//# sourceMappingURL=admin.js.map