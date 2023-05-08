const express=require("express")
var bookcontroller=require("../controller/bookcontroller")

var router =express.Router()

router.post("/",bookcontroller.create)
router.delete("/:id",bookcontroller.delete)
router.get("/",bookcontroller.read)
//router.post("/addbooks",bookcontroller.bookcreate)
module.exports=router