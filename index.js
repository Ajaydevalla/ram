require("dotenv").config()
var express=require("express")
var bookrouter=require("./routes/books-routes")
var productrouter=require("./routes/product-routes")
var ConnectToDataBase=require("./database/db")
var cors=require("cors")
var app=express()

// connect to data base

ConnectToDataBase()

// add the middle ware
app.use(express.json())
app.use(cors())
app.use("/api/books",bookrouter)
app.use("/api/products",productrouter)

var PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("server is running");
    
})
