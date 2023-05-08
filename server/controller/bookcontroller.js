
var axios=require("axios")
//bookcontrollers
var bookcontroller=require("../model/bookmodel");
var center=require("../model/vaccinationmodel");


exports.create=(req,res)=>{

    axios.get("http://localhost:3000/centers/")
    .then(response=>{
      
       
       for(let k=0;k<response.data.length;k++)
       {    
          console.log(response.data[k].name,req.body.centrename);
          if(response.data[k].name==req.body.centrename && response.data[k].place==req.body.place)
          {  //above
            var count=0
            axios.get("http://localhost:3000/books/")
            .then(response2=>{
                for(let i=0;i<response2.data.length;i++)
              { 
                if(response2.data[i].date===req.body.date && response2.data[i].place===req.body.place)
                {  
                    count++;
                    console.log(count);
                  
                }
                 
              }
              if(count>3)
              {
                console.log("this day is already full");
              res.redirect("/bookslot")
              }
              else{
        

                var insert=new bookcontroller({
                    username:req.body.username,
                    place:req.body.place,
                    date:req.body.date,
                    centrename:req.body.centrename,
                    mobileno:req.body.mobileno

                    
            
                })
                insert.save().then(()=>{
                   
                    console.log("inserted");
                
                     res.redirect("/usershome")
                }).catch((err)=>{
                    console.log("error          insert",err);
                    
                    
                })




               //else 
              }
            })
            .catch((err)=>{console.log(err);})
            console.log("count of added is",count);


            //below
            
             break 
          }  
       }

       
    })
    .catch((err)=>{console.log(err);
     // res.redirect("/")
    })

    //res.redirect("/bookslot")

   
    //res.send({data:insert})


}
exports.delete=(req,res)=>{
    bookcontroller.findByIdAndDelete(req.params.id).exec()
    .then((response)=>{
        res.send(response);
    
   })
    .catch((err)=>{ console.log(err);
    })

}
exports.read=(req,res)=>{
    bookcontroller.find().exec()
    .then((response)=>{console.log("read correctly");
     res.send(response)
})
    .catch((err)=>{ console.log("error read"+err)})


}
