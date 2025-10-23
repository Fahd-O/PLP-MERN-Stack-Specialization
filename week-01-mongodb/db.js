// Connection to MongoDB file

const mongoose = require('mongoose'); // Commonjs Module - Default
require('dotenv').config();

async function connectDB(){
    // Switch between local and cloud MongoDB Database by commenting/uncommenting the appropriate line below:
    // await mongoose.connect(process.env.MONGODBATLAS_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Oh, the connection actually happened! Connected to Localhost MongoDB.');
}

module.exports = {connectDB, mongoose};