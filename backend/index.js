const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const app = express();
const http = require('http')
const server = http.createServer(app);
require('dotenv').config();
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));
const dbConnection = require('./utils/database')
const { initializeSocket } = require('./utils/socket');
const userRoutes = require('./routes/user')
initializeSocket(server);

dbConnection.on('error', (error) => {
    console.error('Database connection error:', error);
    throw error; // Throw the error to stop the application from running
});

app.get('/', function (req, res) {
    res.status(200).json({ message: 'Server is Running !!!' });
});

app.use('/api', userRoutes)


dbConnection.once('open', () => {
    server.listen(PORT, error => {
        if (error) console.log(error, "connection failed")
        console.log(`server is running on Port ${PORT}`);
    });
  });