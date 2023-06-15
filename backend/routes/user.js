const express = require('express')
const { userSignup } = require('../controllers/authentication')
const router = express.Router()

router.post('/user-register',userSignup )
router.post('/user-login')
module.exports = router