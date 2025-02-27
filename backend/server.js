require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

connectDB();  // Connect to MongoDB

const server = express();
server.use(cors());
server.use(express.json());

server.use('/api', app);

server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
