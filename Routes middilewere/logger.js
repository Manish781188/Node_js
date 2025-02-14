const timeLoggerMiddleware = (req, res, next) => {
    console.log("start time");
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    console.log(endTime - startTime, "ms");
  };
  
  
  module.exports = {timeLoggerMiddleware}