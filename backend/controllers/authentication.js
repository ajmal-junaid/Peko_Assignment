const User = require("../models/user")
const Transaction = require('../models/transactions')
const bcrypt = require('bcrypt')
const validator = require('validator')
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const nodemailer = require('nodemailer');
const sendMail = require("../utils/nodemailer");
const Jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET

module.exports = {
    userSignup: async (req, res) => {
        try {
            const { mobile, email, name } = req.body;

            if (!validator.isMobilePhone(mobile, 'en-IN', { strictMode: false })) {
                return res.status(400).json({
                    message: 'Invalid mobile number',
                });
            }

            if (!validator.isEmail(email)) {
                return res.status(400).json({
                    message: 'Invalid email',
                });
            }

            const mobileExists = await User.findOne({ mobile: mobile });
            const emailExists = await User.findOne({ email: email });
            if (mobileExists || emailExists) {
                return res.status(409).json({
                    message: 'User already exists',
                });
            }

            if (!name) {
                return res.status(400).json({
                    message: 'Name is required',
                });
            }

            req.body.password = await bcrypt.hash(req.body.password, 11);
            const user = await User.create(req.body);
            const newTransaction = new Transaction({
                user: user.mobile,
                transactions: [],
            });
            await newTransaction.save();
            return res.status(201).json({ message: 'Created successfully' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    },
    userLogin: async (req, res) => {
        try {

            const { email, password } = req.body;

            if (!validator.isEmail(email)) {
                return res.status(400).json({
                    message: 'Invalid email',
                });
            }
            const user = await User.findOne({ email: email })
            if (user) {
                const secret = speakeasy.generateSecret();
                user.secret = secret.base32;

                const otpauthURL = speakeasy.otpauthURL({
                    secret: secret.ascii,
                    label: 'Paytm Aj',
                    issuer: 'Ajmal-client',
                    encoding: 'ascii',
                });
                const result = await bcrypt.compare(password, user.password)
                if (result) {
                    if (user.wrongAttempt > 5) {
                        return res.status(400).json({ message: "Limit exceeded" })
                    }
                    const otp = Math.floor(1000 + Math.random() * 9000);
                    sendMail(otp, email)
                    user.otp = otp;
                    await user.save();
                    qrcode.toDataURL(otpauthURL, (err, dataUrl) => {
                        if (err) {
                            console.error('Error generating QR code:', err);
                            return res.status(400).json({ message: "Error generating qr code" })
                        } else {
                            return res.status(201).json({ message: 'OTP Sended', data: dataUrl });
                        }
                    });
                } else {
                    user.wrongAttempt++;
                    return res.status(400).json({ message: "Wrong Credentials" })
                }
            } else {
                return res.status(400).json({ message: "User not exists" })
            }

        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    },
    verifyLogin: async (req, res) => {
        try {
            const { email, otp } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (otp.length == 4 && otp != user.otp) {
                return res.status(403).json({ message: 'Invalid OTP' });
            }

            if (otp != user.otp) {
                const verificationResult = speakeasy.totp.verify({
                    secret: user.secret,
                    encoding: 'base32',
                    token: otp,
                });

                if (!verificationResult) {
                    return res.status(403).json({ message: 'Invalid TOTP' });
                }
            }
            Jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                    _id: user._id,
                },
                jwtKey,
                { expiresIn: 86400 },
                (err, token) => {
                    if (err)
                        return res
                            .status(403)
                            .json({ err: true, message: 'error in token generation' })
                    if (token)
                        res.cookie('token', token, { httpOnly: false });
                    return res.status(200).json({
                        message: 'Email verified successfully',
                    })
                }
            )
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    }
}