var express=require("express")

var router=express.Router()

var {getallbooks,getsinglebook,addnewbook,updatabook,deletebook}=require("../controllers/books-controller")


router.get("/get",getallbooks)

router.get("/get/:id",getsinglebook)

router.post("/post",addnewbook)

router.put("/put/:id",updatabook)

router.delete("/delete/:id",deletebook)


module.exports=router