module.exports = mongoose => {
    var schema = mongoose.Schema(
         //Add Doctor
    {
        doctor_name: string,
        age: number,
        emergency_number:number,
        email:email,
        gender:string,
        blood_group:string,
        brithdate:Date,
        address:string,
        education:string,
        department:string,
        passwoard:passwoard,
        other_detils:string
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
  