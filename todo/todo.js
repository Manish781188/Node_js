const { log } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json()) 
app.get('/', (req, res) => {
    res.send("welcome to the server");
})
/// get
app.get("/data",(req,res) => {
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
    console.log(data);
    
    res.send(data);
})

// post
app.post('/addTodo', (req, res) => {
    
    const postdata = req.body;
    // console.log(postdata);
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
    data.push(postdata);
    console.log(data);
    fs.writeFileSync("./data.json",JSON.stringify(data));
    res.send(" addTodo");
    
})
//delete

app.delete('/deleteTodo', (req, res) => {
    const postdata = req.body;
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
    // console.log(data);
    let newData = data.filter((el)=>{
        return el.id != postdata.id;
    })
    // console.log(newData);
    fs.writeFileSync("./data.json", JSON.stringify(newData));

    res.send(" deleteTodo");
    
})

// update the data using put
app.put('/updateTodo/:id', (req, res) => {
    const ip = +req.params.id;
    console.log(ip);
    const getData = req.body;
    // console.log(getdata);
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
        const newData = data.map((el) =>{
            if(el.id == ip) {
                return {...getData}
            } else {
                return el;
            }
        })
        console.log(newData);
        fs.writeFileSync("./data.json",JSON.stringify(newData))
    
  res.send("update todo usening  put");
})
//patch

app.patch("/partiallyUpdate",(req, res)=>{
    const ip =  +req.query.id  
    console.log(ip);
    const getData = req.body;
    const data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
        const newData = data.map((el) =>{
            if(el.id == ip) {
                return {...el,...getData}
            } else {
                return el;
            }
        })
        console.log(newData);
        
        fs.writeFileSync("./data.json",JSON.stringify(newData))
    res.send("partially update successfully");

})
app.listen(8080 , (err)=>{
  if(err) {
    console.log("something is wrong");
  }else{
    console.log("server is listening on port 8080");  
  }
})