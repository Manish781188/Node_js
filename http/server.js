
  const http = require('http');
  const fs = require('fs');
  const server =http.createServer((req, res) => {
      if(req.url=='/'){
        res.end("welcome to the web server")  
      }
      else if(req.url=='/data' && req.method=="POST"){
        // fs.readFile("data.json",  (err, data) =>{
        //   if(err){console.log(err);
        //   }else{
           
        //     res.end(data);
        //   }
        // })
        let str = "";
        req.on("data", (chunk) =>{
          str += chunk;
        })
        req.on("end", () =>{
          console.log(str);
          
        })
        
        const data = fs.createReadStream("./data.json","utf-8");
        data.pipe(res);
      }else{
          res.end(http.STATUS_CODES["404"]);
      }
        
  })

  server.listen(3002,(err)=>{
      if(err){
          console.log("some issue with server"); 
      }else{
          console.log("server listening  on port 3002");
      }
  })