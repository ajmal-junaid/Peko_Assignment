const nodemailer = require('nodemailer')
const sendMail = async (otp, email) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.YOUR_EMAIL,
            pass: process.env.YOUR_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.YOUR_EMAIL,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP for verification for Paytm-Aj is ${otp}. This OTP is valid for 5 minutes only.`,
    }

    const response = transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.log(error)
            throw error;
        } else {
            console.log('Email sent: ' + info.response)
            return info.response;
        }
    })
    return response
}

module.exports = sendMail;