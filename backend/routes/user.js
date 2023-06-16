const express = require('express')
const { userSignup, userLogin, verifyLogin } = require('../controllers/authentication')
const {verifyUser} = require('../middlewares/verifyUser')
const { getWallet } = require('../controllers/wallet')
const { getTransactions } = require('../controllers/transactions')
const router = express.Router()

router.post('/user-register',userSignup )
router.post('/user-login',userLogin)
router.post('/verify-login',verifyLogin)
router.get('/get-wallet',verifyUser,getWallet)
router.get('/get-transactions',verifyUser,getTransactions)

module.exports = router