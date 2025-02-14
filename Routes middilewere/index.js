const express = require("express");
const {timeLoggerMiddleware} = require("./logger");
const { stRouter } = require("./st.routes");
const { techRouter } = require("./teach.routes");
const app = express();

app.use(timeLoggerMiddleware);
// app.use("/st", stRouter);
// app.use("/tech", techRouter);

app.get("/",(req,res)=>{
    res.send("welcome to home page")
    console.log("welcome to home page");
    
})
app.listen(8080, () => {
  console.log("server is running");
});