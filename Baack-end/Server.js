const express= require('express');
const app=express();
app.get("/ping",(req,res)=>{
    res.send("pong")
})

app.listen(3000,(req,res)=>{
    console.log("Server started on port 3000")
})