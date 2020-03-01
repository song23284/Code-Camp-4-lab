let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.send('hallo world')
})

app.get('/bye',(req,res)=>{
    res.send('good bye')
})

app.listen(3000)
