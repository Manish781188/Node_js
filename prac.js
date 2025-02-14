const express = require('express')
const fs = require('fs')
  const app = express()
app.use(express.json());
  app.get('/', (req, res) =>{
    res.send("well come to my server");
  })
  
  app.get('/pdata',(req, res) =>{
    const data = fs.readFileSync("./pdata.json", "utf8"); 
    res.send(data)
  })

  app.post("/adddata",(req, res) =>{
    const data =JSON.parse(fs.readFileSync("./pdata.json","utf-8"));
      console.log(data.students);
      const st=data.students
      st.push(req.body);
  fs.writeFileSync("./pdata.json", JSON.stringify(data))
      res.send("add data sucessfully")
  })

// app.delete("/deletedata",(req,res) => {
//     const data = JSON.parse(fs.readFileSync("./pdata.json","utf-8"));
//     const ip=req.body;
//     const result = data.students;
//     console.log(result);
    
//     result = result.filter((el)=>{
//         return el.name!=ip.name;
//        })
//     fs.writeFileSync("./pdata.json", JSON.stringify(result));

//     res.send("delete data sucessfully");
// })
app.delete("/deletedata", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./pdata.json", "utf-8"));
  //  console.log(data.students);
   let ip = req.body;
  //  console.log(ip);
   
 let result = data.students;
 console.log(result);
 result = result.filter((e)=>{
  return e.name!= ip.name;
 })
 console.log(result ,"hello");
 data.student =result;
 fs.writeFileSync("./pdata.json", JSON.stringify(result));

    res.send("Delete data successfully");
});

  app.listen("8000",(err)=>{
    if(err){console.log("something is wrong");
    }
    else{console.log("server is listening on 8000")}
  })