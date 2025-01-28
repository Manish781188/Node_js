const os = require('os');
const fs = require('fs');
const message = `Platform : ${os.platform()} Architecture : ${os.arch()} totalmemory : ${os.totalmem()/1024/1024} GB`;

fs.writeFile("SystemInfo.txt", message,(err)=>{
    if(err){
        console.log("file not created");
        return;
    }
    console.log("file created successfully");
    
})