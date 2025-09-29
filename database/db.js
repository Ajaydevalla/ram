var mongoose=require("mongoose")

async function ConnectToDataBase(){
    try{
      await mongoose.connect(process.env.MONGO_URL)
      console.log("connected to the data base");
      
    }
    catch{
        console.log("error");
        

    }
}
module.exports=ConnectToDataBase