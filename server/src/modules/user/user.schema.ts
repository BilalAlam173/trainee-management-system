import * as mongoose from 'mongoose';
// import * as bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');
import { Schema } from 'inspector';
import { USER_ROLES } from '../../globals';

export const UserSchema: any = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: Object.values(USER_ROLES) },
});

const encryptPassword = function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(2, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
};

const comparePassword = function(candidatePassword: string, callback: any) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      console.log(err, isMatch);
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

UserSchema.pre('save', encryptPassword);
UserSchema.pre('update', encryptPassword);
UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  },
});
UserSchema.methods.comparePassword = comparePassword;
