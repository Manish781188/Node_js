const os = require('os');
const fs = require('fs');

const message = `\nPlatform : ${os.platform()} Architecture : ${os.arch()}totalmemory : ${os.totalmem()/1024/1024} GB`;

 setInterval(()=>{
fs.appendFile("text files/Information.txt"  , message , (err)=>{
    if(err) {
        console.log("Something ewent wrong");
        
    } else {
        console.log("File creted successfully");
        
    }
})

},8000)