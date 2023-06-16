const mongoose = require('mongoose');
const User = require('../models/user');
const Transaction = require('../models/transactions');
const connection = require('../utils/database');

module.exports = {
    addTransaction: async (data) => {
        let session;
        data.type = "send"
        try {
            const user = await User.findOne({ mobile: data.from },
                null,
                { session });
            if (!user) {
                return "Invalid sender"
            }
            if (data.amount > user.wallet) {
                return 'Insufficient Funds';
            }
            const receiver = await User.findOne({ mobile: data.receiverMobile },
                null,
                { session });
            if (!receiver) {
                return 'Invalid Recipient';
            }

            session = await connection.startSession();
            session.startTransaction();

            const reciepant = await Transaction.findOne(
                { user: data.from },
                null,
                { session }
            );
            user.wallet-=data.amount
            reciepant.transactions.push(data);
            await user.save({session})
            await reciepant.save({ session });
            const sender = await Transaction.findOne(
                { user: data.receiverMobile },
                null,
                { session }
            );
           receiver.wallet+=parseInt(data.amount);
            sender.transactions.push(data);
            await receiver.save({session})
            await sender.save({ session });


            await session.commitTransaction();
            session.endSession();

            return 'success';
        } catch (error) {
            if (session) {
                await session.abortTransaction();
                session.endSession();
            }

            console.log('Error adding transaction:', error);
            return 'failure';
        }
    },
    getTransactions:async(req,res)=>{
        try {
            const user = req.mobile;
           const transaction =await Transaction.findOne({user})
           const latestTransactions = transaction.transactions.slice(-10);
           return res.status(200).json({message:"success",data:latestTransactions})

        } catch (error) {
            console.error(error)
        }
    }
};
