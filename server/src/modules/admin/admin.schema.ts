import * as mongoose from 'mongoose';
// import * as bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs')
import { Schema } from 'inspector';


export const AdminSchema: any = new mongoose.Schema({
    username: String,
    password: String,
});

const encryptPassword = function (next) {
    const admin = this;
    if (!admin.isModified('password')) return next();
    bcrypt.genSalt(2, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(admin.password, salt, (error, hash) => {
            if (error) {
                return next(error);
            }
            admin.password = hash;
            next();
        });
    });

}

const comparePassword = function (candidatePassword: string, callback: any) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
}

AdminSchema.pre('save', encryptPassword);
AdminSchema.pre('update', encryptPassword);
AdminSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
    }
});
AdminSchema.methods.comparePassword = comparePassword;

