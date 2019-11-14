let express = require('express')
let app = express()
let oob = ["hello",'hello',"hello"]

app.get('/t',(req,res)=>{
     
    res.send(oob)
})


app.listen(3000 ,()=>{
    console.log("server is running")
})