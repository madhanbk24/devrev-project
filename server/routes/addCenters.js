const express=require("express")
var centercontroller=require("../controller/centercontroller")

var router =express.Router()

router.post("/",centercontroller.create)
router.delete("/:id",centercontroller.delete)
router.get("/",centercontroller.read)
//router.post("/addcenters",centercontroller.centercreate)
module.exports=router