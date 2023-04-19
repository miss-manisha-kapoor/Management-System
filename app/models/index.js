const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.appointment = require("./tutorial.appointment.js")(mongoose);
db.users = require("./tutorial.users.js")(mongoose);
// db.patient = require("./tutorial.patient.js")(mongoose);
db.patient = require("./tutorial.patient.js")(mongoose);
<<<<<<< HEAD
db.bill = require("./tutorials.getAllPayments.js")
=======
db.report = require("./tutorial.createReport.js")(mongoose);
>>>>>>> 8a2c1ae2be8270a6002b7b24de8d7a34cd13da67

module.exports = db;
