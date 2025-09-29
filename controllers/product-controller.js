var products=require("../model/product")

var getallproducts=async(req,res)=>{
     var allproducts=await products.find()
     res.status(200).json(allproducts)
}


var getsingleproducts=async(req,res)=>{
     var productid=req.params.id
     var singleproduct=await products.findById(productid)
     res.status(200).json(singleproduct)
}

var addproduct=async(req,res)=>{
     var newproduct=req.body
     var addproduct=await products.create(newproduct)
     res.status(200).json(addproduct)
}

var updataproduct=async(req,res)=>{
    var updateddata=req.body
    var productid=req.params.id
    var product=await products.findByIdAndUpdate(productid,updateddata)
    res.status(200).json(product)
}

var deleteproduct=async(req,res)=>{
    var productid=req.params.id
    var deletedproduct=await products.findByIdAndDelete(productid)
    res.status(200).json(deletedproduct)
}

module.exports={
    getallproducts,getsingleproducts,addproduct,updataproduct,deleteproduct
}