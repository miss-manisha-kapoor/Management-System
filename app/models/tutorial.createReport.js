module.exports = mongoose => {
    var schema = mongoose.Schema(
         //create Report
    {
        doctor_name: String,
        department:String,
        doctor_mobile:Number,
        patient_name:String,
        patient_age:Number,
        patient_mobile:Number,
        email:String,
        patient_gender:String,
        patient_blood_group:String,
        patient_disease:String,
        patient_temprature:Number,
        patient_weight:Number,
        patient_BP: String,
        patient_glucose:String,
        extra_info:String,
        medicines:[],
        date:Date,
        time:String
  
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const {id, ...object } = this.toObject();
      object.id = id;
      return object;
    });
  
    const Report = mongoose.model("reports", schema);
    return Report;
  };
  