const express = require('express');

const app = express();
// rauting
    app.get("/", (req, res) => {
        // res.send("<h1>server chal raha h</h1>");
        res.json({
            success : true,
            message : "server chal raha",
        })
    });
  app.get("/product-list", (req, res) => {
    res.json({
        success : true,
        message : "product list",
        data : [
            {id:1 , name:"product 1" ,price:100},
            {id:2 , name:"product 2" ,price:200},
            {id:3 , name:"product 3" ,price:300},
        ]
    })
  })
  app.post("/", (req, res) => {
    // res.send("<h1>server chal raha h</h1>");
    res.json({
        success : true,
        message : "server in side the post",
    })
});
app.use("*", (req, res) => {
    // res.send("<h1>server chal raha h</h1>");
    res.json({
        success :false,
        message : "page not found",
    })
});
app.listen(3000,(err)=>{
    if(err){
        console.log("some issue with server"); 
    }else{
        console.log("server listening  on port 3000");
    }
})