var express=require("express")
var app=express()
var morgan=require("morgan")
var dotenv= require("dotenv")
const path=require("path")
var bodyParser=require("body-parser")
var connect=require("./server/database")
const router = require("./server/routes/addUser")
const router2=require("./server/routes/addAdmin")
const router3=require("./server/routes/addCenters")
const router4=require("./server/routes/addBook")
var axios=require("axios")
const { name } = require("ejs")


app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use(morgan("tiny"))
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,'./views'))
dotenv.config({path:"config.env"})
//app.use(dotenv({"path":"./config.env"}))
app.use(bodyParser.urlencoded({extended:true})) // if any change in reaxt to change in server use this
app.use("/users",router)
app.use("/admins",router2)
app.use("/centers",router3)
app.use("/books",router4)
const PORT =process.env.PORT ||3000
connect()

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/user",(req,res)=>{
    res.render("userlogin")
})
app.get("/setuser",(req,res)=>{
    res.render("usersignup")
})

app.get("/adminlgin",(req,res)=>{
    res.render("adminlogin")
})
app.get("/adminhome",(req,res)=>{
    res.render("adminhome")
})

app.get("/deletepage",(req,res)=>{
    axios.get("http://localhost:3000/centers/")
    .then(response=>{
        console.log(response.data[0]);
        res.render("deletecenters",{centers:response.data})})
    .catch((err)=>{console.log(err);})
    
})
app.get("/addcenters",(req,res)=>{
    res.render("addCenters")
})


app.get("/viewcenters",(req,res)=>{
    axios.get("http://localhost:3000/centers/")
    .then(response=>{
        res.render("viewcenters",{centers:response.data})})
    .catch((err)=>{console.log(err);})
})



app.get("/deletecen/:id",(req,res)=>{
    axios.delete(`http://localhost:3000/centers/${req.params.id}`)
    .then(response=>{
     res.redirect("/adminhome")    
    })
    .catch((err)=>{console.log(err);})
})

app.get("/usershome",(req,res)=>{
    res.render("usershome")
})


app.get("/bookslot",(req,res)=>{
    res.render("bookslot")
})


app.get("/searchcentre",(req,res)=>{
   
    axios.get("http://localhost:3000/centers/")
    .then(response=>{
        console.log(response.data[0]);
        res.render("searchcentres",{centers:response.data})})
    .catch((err)=>{console.log(err);})
    

})
app.get("/setadmin",(req,res)=>{
    res.render("adminsignup")
})

app.listen(PORT,()=>{
    console.log(`"server is running" ${PORT}`);
})