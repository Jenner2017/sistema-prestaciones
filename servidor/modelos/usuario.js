const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const miSalt = require("../config").salt;

const userSchema = new Schema({
    email: { type: String, unique:true, lowercase: true },
    displayName: String,
    password: { type: String, select: true },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date 
});

userSchema.pre("save", function(next) {
    let usuario = this;
    if(!usuario.isModified("password")) return next();

    bcrypt.genSalt(miSalt, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(usuario, salt, (err, hash) => {
            if(err) return next(err);

            usuario.password = hash
            next();
        })
    })
});

userSchema.methods.comparar = function(password, hash, cb) {
    bcrypt.compare(password, hash, (err, sonIguales) => {
        if(err) return cb(err);
        cb(null, sonIguales)
    })
}

module.exports = mongoose.model("User", userSchema);