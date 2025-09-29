var express=require("express")

var {getallproducts,getsingleproducts,addproduct,updataproduct,deleteproduct}=require("../controllers/product-controller")

var router=express.Router()

router.get("/get",getallproducts)

router.get("/get/:id",getsingleproducts)

router.post("/post",addproduct)

router.put("/updata/:id",updataproduct)

router.delete("/delete/:id",deleteproduct)


module.exports= router