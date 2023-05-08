var mongoose =require("mongoose")
var schema=mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
     email:{
        type:String,
        required:true,
    
    },
    password:{
        type:String,
        required:true
    }
   
})
var adminmodel=mongoose.model("admin",schema)

module.exports=adminmodel