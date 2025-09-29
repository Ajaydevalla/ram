var mongoose=require("mongoose")

var mybookSchema=new mongoose.Schema({
      title:String,
      price:Number,
      author:String,
})

module.exports=mongoose.model("books",mybookSchema)