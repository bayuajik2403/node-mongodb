// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/animals');
// mongoose.connection
//     .once('open', ()=>console.log('CONNECTED'))
//     .on('error', (err)=>{
//         console.log(`couldnt connect `, err)
//     });


var {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err
    console.log(ObjectId());
    
    const db =client.db('animals');
    // db.collection('mammals').insertOne({
    //     name : 'fish',
    //     legs : 2

    // }, (err,result)=>{
    //     if(err){ return console.log(err)}
    //     console.log('INSERTED');
    // });
    
    console.log('CONNECTED');

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
