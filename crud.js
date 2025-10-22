const {connectDB, mongoose} = require('./db');
const {User} = require('./Models/Users');
const {Task} = require('./Models/Tasks');

async function main(){
    await connectDB();

    // // CREATE
    // const johnVariableContainer = await User.create({name: 'John Isaac', email: 'bnyaqub@mail.com'});
    // console.log('Created:', johnVariableContainer);

    // // READ
    // const usersVariableContainer = await User.find().select('name email');
    // console.log('These are all the Users yo!:', usersVariableContainer);

    // //UPDATE
    // await User.updateOne({email: 'bnyaqub@mail.com'}, {role: 'admin'});
    // console.log('One User role just got updated, big time!');

    // // DELETE
    // await User.deleteOne({email: 'bnyaqub@mail.com'});
    // console.log('One user deleted! Sorry to see you go');

    // AGGREGATE
    const byStatus = await Task.aggregate([
        {$group: {_id: '$status', total: {$sum: 1}}}
    ]);
    console.log('Task has been aggregated by their status, just now wow!:', byStatus);

    await mongoose.disconnect();
}

main();