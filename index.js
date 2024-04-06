require("dotenv").config()
const express = require("express");
const app = express()
const port = 4000;

app.get("/",(req,res)=>{
  res.send("Hello World")
})
app.get("/Twitter",(req,res)=>{
  res.send("Hello galaxy World")
})
app.get("/facebook",(req,res)=>{
  res.send("<h1>Keep it up sanket one day u must achieve succes<h1>")
})

app.listen(port,()=>{
  console.log("successfuly launched")
})