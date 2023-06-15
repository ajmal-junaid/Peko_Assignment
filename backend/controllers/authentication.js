const User = require("../models/user")
const bcrypt = require('bcrypt')
const validator = require('validator')
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
            await User.create(req.body);
            return res.status(201).json({ message: 'Created successfully' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    }
}