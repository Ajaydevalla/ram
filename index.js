require("dotenv").config()
var express=require("express")
var router=require("./routes/books-routes")
var ConnectToDataBase=require("./database/db")

var app=express()

// connect to data base

ConnectToDataBase()

// add the middle ware
app.use(express.json())
app.use("/api/books",router)

var PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("server is running");
    
})
