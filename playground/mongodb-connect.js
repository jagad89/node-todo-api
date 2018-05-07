// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name:"Mik", age:45};
//object destructure, this will extract name property from user object and assign to name variable.
var {name} = user;
console.log(name);
return;

MongoClient.connect('mongodb://<mlabuser>:<password>@ds115350.mlab.com:15350/todoapp',(err,database)=>{
    if(err){
        console.log('Error while connecting mongo.');
        return;
    }
    console.log('Mongo connection success');
    // db.close();return;
    db = database.db('todoapp');
    // const collection = db.collection('ToDos');
    // collection.insertOne({
    //     "text":"Somethign to do",
    //     "completed":false
    // },(err, result)=>{
    //     if(err){
    //         console.log('Unable to insert record',err);
    //         return;
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    const collection = db.collection('Users');
    collection.insertOne({
        "name":"John Doe",
        "age":34,
        "location":"London"
    },(err, result)=>{
        if(err){
            console.log('Unable to insert record',err);
            return;
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    database.close();
});