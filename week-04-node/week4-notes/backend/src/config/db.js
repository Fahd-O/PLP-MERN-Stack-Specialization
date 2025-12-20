const mongooseContainer = require('mongoose');

async function connectDB() {
    try {
        await mongooseContainer.connect('process.env.MONGODB_URI');
        console.log('Oh, the connection actually happened! Connected to Localhost MongoDB is a success! Making progress in Week 4... onward!!!');
    } catch (error) {
         console.error('MongoDB error: ', error.message);
         process.exit(1);
    }
}

module.exports = { connectDB };