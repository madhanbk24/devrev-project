const express=require("express")
var admincontroller=require("../controller/admincontroller")

var router =express.Router()

router.post("/verify",admincontroller.verify)
router.get("/",admincontroller.read)
router.post("/",admincontroller.create)

router.delete("/:id",admincontroller.delete)

//router.post("/addcenters",admincontroller.centercreate)
module.exports=router