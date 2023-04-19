const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
console.log("1");
// // view engine

app.set('view engine', 'ejs');
// // const {  ServerApiVersion } = require('mongodb');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://localhost:27017/SecureLife-Hospital";
// // const db = {};
// const client = new MongoClient(uri);
// async function getData (){
//           let re = await client.connect();
//           let db = re.db("SecureLife-Hospital");
//           let collection = db.collection("Patient");
//           console.log(collection.find({}).toArray());

// }
// getData();


// // middleware
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!')
// })

// const express = require("express");
const cors = require("cors");


// var corsOptions = {
//   origin: "mongodb+srv://manishakapoor:manisha209@cluster0.fs5tuxj.mongodb.net/?retryWrites=true&w=majority"
// };

// app.use(cors(corsOptions));
// app.use(cors({
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }));
app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'mongodb+srv://manishakapoor:manisha209@cluster0.fs5tuxj.mongodb.net/?retryWrites=true&w=majority'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  const tutorials = require("./app/controllers/tutorial.controller.js")
// simple route
app.get("/", tutorials.findAll );
app.get("/h",(req,res)=>{
  res.sendFile("public/addUser.html",{root:__dirname})  
})
app.get("/signup",(req,res)=>{
  res.sendFile("public/signup.html",{root:__dirname})  
})
app.get("/getReport",tutorials.getReport);
app.post("/createReport",tutorials.createReport);
app.post("/createAppointment", tutorials.createAppointment);
app.get("/getAppointment",tutorials.getAppointment);
app.post("/addpatient", tutorials.addpatient);
app.post("/addAmbulance",tutorials.addAmbulance);
app.post("/patientRegister", tutorials.createuser);
app.post("/createDoctor",tutorials.createDoctor);
app.post("/createReceptionist", tutorials.createReceptionist);
app.delete(`/deleteAppointment/:id`,tutorials.deleteAppointment);
app.post("/h", tutorials.create);
// const tutorial = require("./app/routes/turorial.routes.js")
// app.use(tutorial)
// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");

//   // perform actions on the collection object
//   console.log("connected")
//   client.close();
// });
// const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// // Connection URI
// const uri = 'mongodb://localhost:27017';

// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1  });
// console.log("2");

// // Connect to the client
// client.connect(err => {
//   console.log(err)
//   if (err) {
//     console.error(err);
//         console.log("3");
//     return;


//   }
//     console.log("10");

//   // Access the database and collection
//   const collection = client.db("config").collection("HMS");

//   // Find documents in the collection
//   collection.find({name:"Nitin"}).toArray((err, docs) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("4");

//     console.log(docs);
//   });

//   // Close the client
//   client.close();
// });

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

// // routes
app.get('*', checkUser);
app.get('/fetch', (req, res) => res.render('fetch'));
app.get('/',(req,res) =>res.render('home'))
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);
console.log("7");


