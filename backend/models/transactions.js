const mongoose = require('mongoose')
const connection = require('../utils/database')

const transactionSchema = new mongoose.Schema({
    from: {
        type: String,

    },
    receiverMobile: {
        type: String,

    },
    type: {
        type: String,

    },
    amount: {
        type: Number,

    },
    description: {
        type: String,

    },
    timestamp: {
        type: String,
    },
},
    {
        timestamps: true,
    })

const transactionsSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    transactions: {
        type: [transactionSchema],
        capped: 1048576,
    }
})

const Transaction = connection.model('Transaction', transactionsSchema)
module.exports = Transaction;