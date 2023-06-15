const mongoose = require('mongoose')
const connection = mongoose.createConnection(process.env.MONGO_URI_PAYTM, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
module.exports = connection
