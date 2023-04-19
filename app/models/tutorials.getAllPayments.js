module.exports = mongoose => {
    var schema = mongoose.Schema(
         //Add Doctor
    {

        patientName:String,
        department:String,
        patientMobile:Number,
        patientAge:Number,
        date:Date,
        amount:Number,
        status:String
      },
     
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { id, ...object } = this.toObject();
      object.id = id;
      return object;
    });
  
    const Bill = mongoose.model("bill", schema);
    return Bill;
  };
  