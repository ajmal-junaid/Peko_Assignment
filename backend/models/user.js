const mongoose = require('mongoose')
const connection = require('../utils/database')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        default: null
    },
    secret: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true
    },
    wrongAttempt: {
        type: Number,
        default: 0
    },
    wallet: {
        type: Number,
        default: 0
    },
    notification: {
        type: Boolean,
        default: true
    },
    frequent: {
        type: [String]
    }
},
    {
        timestamps: true,
    });

userSchema.pre('save', function (next) {
    const currentTime = new Date();
    const lastModifiedTime = this.updatedAt || this.createdAt;
    if (this.frequent.length >= 5) {
        this.frequent.shift();
    }
    if (lastModifiedTime && currentTime - lastModifiedTime > 15 * 60 * 1000) {
        this.otp = null;
    }
    if (lastModifiedTime && currentTime - lastModifiedTime > 7 * 24 * 60 * 60 * 1000) {
        this.wrongAttempt = 0;
    }
    next();
});

const User = connection.model('User', userSchema)
module.exports = User