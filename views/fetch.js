var mongoose=require('mongoose');
var db = require('../app');
// create an schema
var userSchema = new mongoose.Schema({
            full_name: String,
            email_address:String,
            city:String,
            country:String
        });
userTable=mongoose.model('users',userSchema);
console.log(userTableS)
        
module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}