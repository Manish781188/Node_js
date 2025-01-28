const http = require('http');
 const server=http.createServer((req, res) => {
    console.log(req);
    console.log(req.url);
    if(req.url==="/"){
        if(req.method==="POST"){
            const output ={
                success : true,
                data :[],
                message :"hello i am a post method",
            }
            res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(output));
        }else if(req.method==="GET"){
            const output ={
                success : true,
                data :[],
                message :"hello i am a get method",
            }
            res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(output));
        }  
    }
    else if(req.url==="/product-list"){
     const output =[
        {id:1 , name:"product 1" ,price:100},
        {id:2 , name:"product 2" ,price:200},
        {id:3 , name:"product 3" ,price:300},
     ]
     res.writeHead(200, {"content-type": "application/json"});
     res.end(JSON.stringify(output));
    }else if(req.url==="/ description"){
        const output ="this is a simple API";
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(output));
    }else if(req.url==="/user"){
        const output =[
            {id :1 ,name :"manish" , age:19},
            {id :2 ,name :"nishant" , age:20},
            {id :3 ,name :"vishwajeet" , age:25},
        ]
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(output));
    }else{
        const output ={
            success : false,
            message : "Invailid endpoint"
        }
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(output));
    }
    
 });
server.listen(3002,(err)=>{
    if(err){
        console.log("some issue with server"); 
    }else{
        console.log("server listening  on port 3000");
    }
})