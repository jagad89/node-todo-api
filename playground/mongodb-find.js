// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://<mlabuser>:<password>@ds115350.mlab.com:15350/todoapp', (err, database) => {
    if (err) {
        console.log('Error while connecting mongo.');
        return;
    }
    console.log('Mongo connection success');
    // db.close();return;
    db = database.db('todoapp');

    db.collection('ToDos').find({
        _id: new ObjectID("5aee9fcac8c9ce9c1c2b9b18")
    })
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        },
            (err) => {
                console.log('Fetching failed:' + err);
            });

    db.collection('ToDos').find()
        .count()
        .then((count) => {
            console.log(count);
        },
            (err) => {
                console.log('Fetching failed:' + err);
            });

    database.close();
});