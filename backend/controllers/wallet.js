const User = require("../models/user")

module.exports={
    getWallet:async(req,res)=>{
        try {
            const user =req.token
            const userData = await User.findById(user)
            return res.status(200).json({message:"success",data:userData.wallet})
        } catch (error) {
            
        }
    }
}