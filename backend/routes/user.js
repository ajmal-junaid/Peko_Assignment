const express = require('express')
const { userSignup, userLogin, verifyLogin } = require('../controllers/authentication')
const {verifyUser} = require('../middlewares/verifyUser')
const router = express.Router()

router.post('/user-register',userSignup )
router.post('/user-login',userLogin)
router.post('/verify-login',verifyLogin)

module.exports = router