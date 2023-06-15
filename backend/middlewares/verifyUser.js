const Jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET
module.exports = {
    verifyUser: (req, res, next) => {
        try {
            const token = req.cookies.token;
            if (token) {
                Jwt.verify(token, jwtKey, (err, decoded) => {
                    if (err) {
                        if (err.name === 'JsonWebTokenError') {
                            return res.status(401).json({ message: "User Authentication Failed, Login again", reason: err.name })
                        } else if (err.name === 'TokenExpiredError') {
                            return res.status(401).json({ message: "Timeout, Login again", reason: err.name })
                        } else {
                            return res.status(401).json({ message: "some other error occurred", reason: err })
                        }
                    } else {
                        req.token = decoded._id;
                        next()
                    }
                })
            } else {
                res.status(401).json({ message: "Token not exists" })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Unexpected error in middleware", error: error })
        }
    }
}