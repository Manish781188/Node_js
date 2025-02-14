const express = require('express')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


app.get("/",(req,res)=>{
    console.log("hello")

    res.send(`
        <form action="/profile" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
            <input type="submit"/>
        </form>
        `)
});
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file

    if(req.file){
        res.send("data uploaded")
    } else {
        res.send("error")
    }
    // req.body will hold the text fields, if there were any
  })

app.listen(8080,()=>{
    console.log("sever")
})