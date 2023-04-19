module.exports = mongoose => {
    var schema = mongoose.Schema(
//Add Receptionist
{
    name: String,
    age: Number,
    contact_number: Number,
    email:email,
    gender: String,
    brithday: Date,
    address:String,
    education:String,
    blood_group: String,
    passwoard:passwoard,
    other_info: string
  },
  
 
  { timestamps: true }
);

schema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Tutorial = mongoose.model("tutorial", schema);
return Tutorial;
};
