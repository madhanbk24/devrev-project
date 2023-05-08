var mongoose =require("mongoose")
var schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
   
})
var usermodel=mongoose.model("user",schema)
module.exports=usermodel