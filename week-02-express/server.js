const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/students", require("./routes/studentRoutes"));

// Default route (Home Page)
app.get("/", (req, res) => {
    res.send("API Server for express.js is up and running, boom!");
})


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));