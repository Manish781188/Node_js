const fs = require("fs");    // import fs module
// file created
//fs.writeFileSync("demo.txt" ,"hellow world");
//console.log("file created successfully");

// fs.writeFile("demo1.txt" ,"hellow world",(err)=>{  /// for a asychronious 
// if(err){
//     console.log("something is wrong");
//     return;
// }
// console.log("file created successfully");

// });
// console.log("byy node");


// let data = fs.readFileSync("demo1.txt" ,"utf8");
// console.log(data);
//<_---------------------------------------------------->
// fs.writeFile("simple.txt","hellow today is our day 3 class",(err)=>{
//     if(err){
//         console.log(" file Error:"+err);
//         return
//     }
//     console.log("file created successfully");
    
// });

// fs.readFile("simple.txt","utf8",(err,data)=>{
// if(err){
//     console.log("some issues encountered while reading file"+err);
//     return;
// }
// console.log(data);

// })

////delete
// fs.unlinkSync("simple.txt")
fs.unlink("demo.txt",(err)=>{
    if(err){
        console.log("some issues encountered while deleting");
    return;
    }
    console.log("file is deleted");
    
})