var mongoose =require("mongoose")
const connect=()=>{
mongoose.connect("mongodb://127.0.0.1:27017/madhan")
.then(()=>{console.log("connected");})
.catch(()=>{console.log("error connecting");})
}
module.exports=connect