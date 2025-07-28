const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('practiceDB');
        const collection = db.collection('users');

        
        // // single insertion
        // await collection.insertOne({
        //     'name':'nikhil',
        //     'age':'25',
        // });
        // console.log('Connected and written successfully');


        // // multiple insertion
        // await collection.insertMany([
        //     {name : 'nikhil', age : 25},
        //     {name : 'deu', age : 20}
        // ]);
        // console.log('Connected and written successfully');

        
        // // find all users
        // const res = await collection.find().toArray();
        // console.log(res);


        // // find users > 20(age)
        // const res = await collection.find({age : {$gt : 20}}).toArray();
        // console.log(res);


        // // user with second largest age
        // const res = await collection.find().sort({age : -1}).skip(1).limit(1).toArray();
        // console.log(res);


        // // update a field
        // const res = await collection.updateOne(
        //     {name : "deu"},
        //     {$set : {age : 19}}
        // );
        // console.log("Field Updated");


        // // delete a user
        // await collection.deleteOne({name : "jaadu"});
        // console.log('user deleted');


        // // count all users
        // const res = await collection.countDocuments();
        // console.log('Count :', res);


        // // sort and print
        // const res = await collection.find().sort({age:-}).toArray();
        // console.log(res);


    }
    catch (err) {
        console.log('Connection failed');
    }
    finally {
        await client.close();
    }
}

run();

