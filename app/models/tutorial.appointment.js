module.exports = mongoose => {
    var schema = mongoose.Schema(  
  //Book Appointment
    {
        patient_name:String,
        age:Number,
        gender:String,
        contact_number:Number,
        email:String,
        type_of_disease:String,
        address:String,
        department:String,
        date_and_time:Date
      },
      
    
        { timestamps: true }
      );
    
      schema.method("toJSON", function() {
        const {id, ...object } = this.toObject();
        object.id = id;
        return object;
      });
    
      const appointment = mongoose.model("appointment", schema);
      return appointment;
    };
    