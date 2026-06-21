const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/authDB";

const connectDB= async() =>{
    try {
        const conn = await mongoose.connect(mongoURI)
        if(conn){
            console.log("MongoDB connected successfully");
        }
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}

module.exports = connectDB;

