const express = require("express")
const fs = require("fs")
const app = express();

app.use(express.json());
//read data
app.get("/" , (req,res)=>{
    res.send("Welcome to today class")
})
///read json file
app.get("/data" , (req,res)=>{
    const data = fs.readFileSync("./data.json", "utf-8");
    res.send(data);
})
//read the student data from data.json file
app.get("/studentdata" , (req,res)=>{
    const data = fs.readFileSync("./data.json", "utf-8");
    const parsest = JSON.parse(data);
    console.log(parsest.student);
    res.send("go to student")
    
})
//read the teacher  data from data.json file
app.get("/teacherdata" , (req,res)=>{
    const data = fs.readFileSync("./data.json", "utf-8");
    const parsest = JSON.parse(data);
    console.log(parsest.teacher);
    res.send("go to teacher");
})
app.post("/getstdata",(req,res)=>{
    //read the data
    const data = JSON.parse(fs.readFileSync("./data.json"));
    //get st data
    const st  =data.student;
    st.push(req.body);
    console.log(data);
    fs.writeFileSync("./data.json",JSON.stringify(data));
    res.send("data add successfully");
    
})

app.listen(8000, ()=>{
    console.log("Connection completed");
    
})