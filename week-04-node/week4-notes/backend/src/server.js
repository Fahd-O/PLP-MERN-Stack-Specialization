const expressContainer = require("express");
const corsContainer = require("cors");
const dotenvContainer = require("dotenv");
const { connectDB } = require("./config/db");
const noteRouter = require("./routes/notes");


dotenvContainer.config();
const app = expressContainer();

connectDB();


app.use(corsContainer({
    origin: process.env.ALLOWED_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(expressContainer.json());

app.get("/", (req, res) => res.send("API is up and running... Don't fully understand what API means though. This msg is from the server.js file"));
app.use("/api/notes", noteRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`API is skating on http://localhost:${PORT}. This msg is from the server.js file`));