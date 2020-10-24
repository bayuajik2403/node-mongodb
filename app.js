// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/animals');
// mongoose.connection
//     .once('open', ()=>console.log('CONNECTED'))
//     .on('error', (err)=>{
//         console.log(`couldnt connect `, err)
//     });


var {MongoClient, ObjectId, Db} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err
    //console.log(ObjectId());
    
    //creating data
    const db =client.db('animals');
    // db.collection('mammals').insertOne({
    //     name : 'fish',
    //     legs : 2

    // }, (err,result)=>{
    //     if(err){ return console.log(err)}
    //     console.log('INSERTED');
    // });
    
    // console.log('CONNECTED');

    // fetching data
    // db.collection('mammals').find().toArray(function (err, result) {
    //     if (err) throw err

    //     console.log(result)
    // })


    //updating data
    // db.collection('mammals').findOneAndUpdate({
    //     _id: new ObjectId('5f93c49013826779a94dda7e')
    // }, {
    //     $set: {name: 'updated-2'}
    // }).then(result=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err)
    // });

    // deleting
    // db.collection('mammals').deleteOne({name: ''});

    db.collection('mammals').findOneAndDelete({
        _id: new ObjectId('5f93c49013826779a94dda7e')

    }).then(result=>{
        console.log(result)
    });

})
