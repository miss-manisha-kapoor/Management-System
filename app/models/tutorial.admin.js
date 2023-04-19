module.exports = mongoose => {
    var schema = mongoose.Schema(
        //Add_Admin
    {
        name: String,
        age: Number,
        contact_number: Number,
        email:email,
        gender: String,
        brithdate: Date,
        address:String,
        education:String,
        passwoard: passwoard
  
  
  
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
  