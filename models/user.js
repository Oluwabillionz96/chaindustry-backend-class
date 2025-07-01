const mongoose = require("mongoose");

const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    referredBy: {
        type: String,
        default: null
    },
    referralCode: {
        type: String
    }
});

UserSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    user.password = await bcrypt.hash(user.password, 8);
    next();
});

module.exports = mongoose.model('User', UserSchema);