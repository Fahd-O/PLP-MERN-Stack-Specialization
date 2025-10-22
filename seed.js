const {connectDB, mongoose} = require('./db');
const {User} = require('./Models/Users');
const {Task} = require('./Models/Tasks');

async function main(){
    await connectDB();

    await User.deleteMany({});
    await Task.deleteMany({});

    await User.insertMany([
        {name: 'Fatima bint Misbaudeen', email: 'bintmisbaudeen@mail.com', role: 'cook'},
        {name: "Mubeenah bint Abdulhamid", email: 'haya@mail.com'}
    ]);

    await Task.insertMany([
        {title: "Prepare main course meal", status: "todo", owner: "Fatima"},
        {title: "Look after the kids", status: "in_progress", owner: "Mubeenah"}
    ]);

    console.log('Data populated! For real!');

    await mongoose.disconnect();
}

main();