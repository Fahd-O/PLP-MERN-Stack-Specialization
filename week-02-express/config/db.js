const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODBATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected... Week 2 Express in focus');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};


module.exports= connectDB;