const express = require("express")

const app = express();

app.use(express.json())  //middleware

app.get("/" , (req,res)=>{
    console.log(req.body);
    res.send("Welcome to today class")
})

app.listen(8000, ()=>{
    console.log("Connection completed");
    
})