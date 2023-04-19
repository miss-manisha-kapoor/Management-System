const { MongoClient,  ServerApiVersion } = require('mongodb');
// const { MongoClient } = require('mongodb');
// const  = require('mongodb').MongoClient;
// Connection URI
const uri = 'mongodb+srv://manishakapoor:manishamanisha@cluster0.fs5tuxj.mongodb.net/Patient?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1  });
console.log("2");


MongoClient.connect(uri, function(err, client) {
  if (err) throw err;
  const db = client.db('Patient');
  const collection = db.collection('HMS');
  const document = { name: 'John', age: 30, city: 'New York' };
  collection.insertOne(document, function(err, result) {
    if (err) throw err;
    console.log(result.insertedCount + " document inserted");
    client.close();
  });
});

// Connect to the client
client.connect(err => {
  console.log(err)
  if (err) {
    console.error(err);
        console.log("3");
    return;


  }
    console.log("10");

  // Access the database and collection
  const collection = client.db("Patient").collection("HMS");

  // Find documents in the collection
  collection.find().toArray((err, docs) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("4");

    console.log(docs);
  });

  // Close the client
  client.close();
});

console.log("5");


// // database connection
// const uri = "mongodb+srv://manishakapoor:manisha209@cluster0.fs5tuxj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// mongoose.connect(uri, {useNewUrlParser:true});
// const playlistSchema = new mongoose.Schema({
//   name:{
//     type:String,
//     requred:true
//   },
//   Age:Number,
//   Add:String,
//   Mobile:Number,
//   date:{
//     type:Date,
//     default: Date.now
//   }
// })
// const Playlist = mongoose.model("Playlist", playlistSchema)

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("inside")
//   client.close();
// });
// const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = "mongodb+srv://manishakapoor:<password>@cluster0.fs5tuxj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   // client.close();
//   // console.log("mongo closed")
// });
// var schemaObj = client.db.users.findOne();
// function printSchema(obj) {
//         for (var key in obj) {
//             print(indent, key, typeof obj[key]) ;
//         }
//     };

console.log("6");
