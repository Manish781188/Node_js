const express = require("express");
const app = express();
app.use(express.json()); // inbuilt middleware

// custome middleware
// app.use((req, res, next) => {
//   console.log("hello from middleware");
//   next();
//   console.log("byy from middleware");
//   //   if (req.url == "/") {
//   //     next();
//   //   } else if (req.url == "/data") {
//   //     console.log("please payment first");
//   //   } else {
//   //     next();
//   //   }
// });

// middleware chaining

// let mid1 = (req, res, next) => {
//   console.log(" 1");
//   next();
//   console.log("2");
// };

// let mid2 = (req, res, next) => {
//   console.log("3");
//   next();
//   console.log("4");
// };

// let mid3 = (req, res, next) => {
//   console.log("5");
//   next();
//   console.log("6");
// };

// app.use(mid3,mid1,mid2);
// app.use(mid2);
// app.use(mid3);

const loggerMiddleware = (req, res, next) => {
  console.log(req.url + ": " + req.method);
  next();
  console.log("byyyyyyyyy");
  
  
}
app.use(loggerMiddleware);

// const timeLoggerMiddleware = (req, res, next) => {
//   console.log("start time");
//   const startTime = new Date().getTime();
//   next();
//   const endTime = new Date().getTime();
//   console.log(endTime - startTime,"ms");
// };

// app.use(timeLoggerMiddleware)


app.get("/", (req, res) => {
  console.log("Home page");
  res.send("home page");
});
app.get("/about", (req, res) => {
  console.log("About page");
  res.send("about page");
});

app.get("/data", (req, res) => {
  console.log("data page");
  res.send("data page");
});

app.listen(8080, () => {
  console.log("server is running");
}); 