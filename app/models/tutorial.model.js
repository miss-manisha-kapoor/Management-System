module.exports = mongoose => {
  var schema = mongoose.Schema(
    //Ambulance
    {
      ambulance_type: String,
      price_per_hourse: Number,
      ambulance_code: Number,
      driver_Name: String,
      driver_contact_no: Number
     
      // bloodGroup:String,
      // DOB:Date,
      // mobile:Number,
      // gender:String,
      // userId:Number,
      // userType:String
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
