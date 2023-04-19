module.exports = mongoose => {
    var schema = mongoose.Schema(
//Main Login
        {
        
        password:String,
        type:String,
        fname:String,
        lname:String,
        email:String,
        days:Number,
        months:Number,
        years:Number,
        membership_code:String,
        city:String,
        counrty:String,
        type:String
   
        },
            { timestamps: true }
        );
        
        schema.method("toJSON", function() {
            const { id, ...object } = this.toObject();
            object.id = id;
            return object;
        });
        
        const users = mongoose.model("users", schema);
        return users;
        };