var books=require("../model/books")

var getallbooks=async(req,res)=>{
    var allbooks=await books.find()
    res.status(200).json(allbooks)

}

var getsinglebook=async(req,res)=>{
    var bookId=req.params.id
    var mybook=await books.findById(bookId)
    res.status(200).json(mybook)

}

var addnewbook=async(req,res)=>{
    var formdata=req.body
    var newbook=await books.create(formdata)
    if(newbook){
        res.status(200).json(newbook)
    }else{
        res.status(404).json({message:"connot create a newbook"})
    }

}

var updatabook=async(req,res)=>{
     var updata=req.body
     var bookId=req.params.id
     var mybook=await books.findByIdAndUpdate(bookId,updata)
     if(mybook){
        res.status(200).json(mybook)
     }else{
        res.status(404).json({message:"connot updata a newbook"})
    }

}


var deletebook=async(req,res)=>{
    var bookId=req.params.id
    var mybook=await books.findByIdAndDelete(bookId)
    res.status(200).json(mybook)
}


module.exports={getallbooks,getsinglebook,addnewbook,updatabook,deletebook}