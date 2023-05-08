



//centers
var center=require("../model/vaccinationmodel");

exports.create=(req,res)=>{
    var insert=new center({
        name:req.body.name,
        place:req.body.place,
        starthour:req.body.starthour,
        endhour:req.body.endhour,
        doses:0

    })
    insert.save().then(()=>{console.log("inserted");}).catch((err)=>{
        console.log("error insert");
    })
    //res.send({data:insert})
    res.redirect("/adminhome")

}
exports.delete=(req,res)=>{
    center.findByIdAndDelete(req.params.id).exec()
    .then((response)=>{
        res.send(response);
    
   })
    .catch((err)=>{ console.log(err);
    })

}
exports.read=(req,res)=>{
    center.find().exec()
    .then((response)=>{console.log("read correctly");
     res.send(response)
})
    .catch((err)=>{ console.log("error read"+err)})


}
