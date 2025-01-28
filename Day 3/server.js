const express = require('express');
const fs = require('fs');
const app = express();
app.get("/", (req, res) => {
    res.send("<h1>server chal raha h</h1>");
})
const productlist = require("./product.json");
console.log(productlist);
app.get("/productlist",(req,res) => { 
    res.json(productlist);
    writeFile(`Request URL : ${req.url}  Time: ${new Date()}`);
})

const writeFile =(logString)=>fs.appendFileSync('Day 3/access01.log',logString+'\n');
app.get("/productlist/:id",(req,res) => {
    console.log(req.params);
    // const message=(`Request URL : ${req.url}  Time: ${new Date()}\n`);
    writeFile(`Request URL : ${req.url}  Time: ${new Date()}`);
    
        // fs.appendFile("Day 3/access.log"  , message , (err)=>{
        //     if(err) {
        //         console.log("Something ewent wrong");
                
        //     } else {
        //         console.log("File creted successfully");
                
        //     }
        // })
    const product =productlist.find((product)=>req.params.id==product.id);
    if(product){
        
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully',
            data:product,
        })
    }else{
        res.status(404).json({
            success: false,
            message: 'Product not found',
        })
    }
   
})

//by using query parameter
// app.get("/productlist",(req, res)=>{
//     console.log(req.query);
//     const filterByName =productlist.filter(
//         (product)=>product.title.toLowerCase()==req.query.name
//     );
//     res.status(200).json({
//         success: true,
//         message: "Product list fatched successfully",
//         data : filterByName,
//     })
// })
app.listen(3005,(err)=>{
    if(err){
        console.log("some issue with server"); 
    }else{
        console.log("server listening  on port 3005");
    }
})