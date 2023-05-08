var mongoose =require("mongoose")
var schema=mongoose.Schema({
    centrename:{
        type:String,
        required:true
    },
     place:{
        type:String,
        required:true
    },
    username:{
        type:String,

    
        required:true
    },
    date:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        unique:true,
        required:true
    }
    
    

     
})
var bookmodel=mongoose.model("vaccine",schema)
bookmodel.createIndexes()
module.exports=bookmodel