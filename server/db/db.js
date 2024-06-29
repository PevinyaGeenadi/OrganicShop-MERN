
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = () => {
    try {
        const conn = mongoose.connect(MONGODB_URL);
        console.log(`Mongo DB connected to: ${conn.connection.host}`);
    } catch (err) {
        console.error("Mongo DB Connect Error:", err);
    }

}
module.exports = db;
