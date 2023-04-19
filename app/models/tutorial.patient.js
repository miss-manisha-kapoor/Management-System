module.exports = mongoose => {
    var schema = mongoose.Schema(
//Add Patient
{
    first_name:String,
    last_Name:String,
    email:String,
    password:String,
    days:Number,
    months:Number,
    years:Number,
    membership_code:Number,
    your_city:String,
    your_country:String,
    pID:String
  
  } ,
  { timestamps: true }
  );
  
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
  });
  
  const patient = mongoose.model("patient", schema);
  return patient;
  };