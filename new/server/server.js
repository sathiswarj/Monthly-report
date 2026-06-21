const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const connectDB = require('./src/config/db');
const todoRoutes = require('./src/routes/todoRoutes');
app.use(cors());
app.use(express.json());

// app.use("/",(req,res)=>{
//     res.send("Server is running");
// })
connectDB();
app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})