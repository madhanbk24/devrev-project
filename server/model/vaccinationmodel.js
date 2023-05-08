var mongoose =require("mongoose")
var schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
     place:{
        type:String,
        required:true
    },
    starthour:{
        type:String,
        required:true
    },
    endhour:{
        type:String,
        required:true
    },
    

     
})
var vaccinationmodel=mongoose.model("center",schema)
vaccinationmodel.createIndexes()
module.exports=vaccinationmodel