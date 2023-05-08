var usermodel =require("../model/usermodel");

exports.create=(req,res)=>{
    var insert=new usermodel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    insert.save().then(()=>{console.log("inserted");}).catch((err)=>{
        console.log("error insert");
    })
    //res.send({data:insert})
    res.redirect("/user")

}


exports.read=(req,res)=>{
    usermodel.find().exec()
    .then((response)=>{console.log("read correctly");
     res.send(response)
})
    .catch((err)=>{ console.log("error read"+err)})


}
exports.verify=(req,res)=>{
    const {email,password}=req.body;
    usermodel.find().exec()
    .then((response)=>{
        for(let i=0;i<response.length;i++)
        {  console.log(response[i].email==email && response[i].password==password);
            if(response[i].email==email && response[i].password==password)
            {   console.log("readed correctly");
                res.redirect("/usershome")
                break

            }
            
          
        }
        console.log("email/ password wrong try sign up??");
        res.redirect("/user")

        
       
    
})
    .catch((err)=>{ console.log("error read"+err)})


}

exports.delete=(req,res)=>{
    usermodel.findByIdAndDelete(req.params.id).exec()
    .then(()=>{"deleted crtly"})
    .catch(()=>{ console.log("error read")})


}