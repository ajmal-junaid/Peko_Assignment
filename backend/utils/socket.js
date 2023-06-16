const { Server } = require('socket.io')
const { addTransaction } = require('../controllers/transactions')
function initializeSocket(server) {
    const io = new Server(server, {
        cors: {
            //origin: ['https://eaglone.online', 'https://www.eaglone.online'],
            origin: '*'
        },
    })

    io.on('connection', (socket) => {
        console.log(`user connected to : ${socket.id}`)

        socket.on('join_room', (data) => {
            socket.join(data)

        })

        socket.on('send_money',async (data, callback) => {
            console.log(data, "send money");
            const status =await addTransaction(data)
            console.log(status,"returned by addTransaction");
            if (status == 'success') {
                callback({ success: true, message: 'Transaction successful' });
            } else {
                callback({ success: false, message: status });
            }
            socket.to(data.room).emit('money', data)
        })

        socket.on('disconnect', () => {
            console.log('user disconnected', socket.id)
        })
    })
}

module.exports = { initializeSocket }
