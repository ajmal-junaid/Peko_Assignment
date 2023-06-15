const mongoose = require('mongoose')
const connection = require('../utils/database')

const transactionSchema = new mongoose.Schema({
    person: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
    },
},
    {
        timestamps: true,
    })

const transactionsSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    transactions:{
        type:[transactionSchema],
        capped:1048576,
    }
})

const Transaction = connection.model('Transaction',transactionsSchema)
module.exports=Transaction;