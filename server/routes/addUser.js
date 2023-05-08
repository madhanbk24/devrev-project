const express=require("express")
var controller=require("../controller/controller")
var router =express.Router()


router.post("/verify",controller.verify)
router.get("/",controller.read)
router.post("/",controller.create)


module.exports=router
