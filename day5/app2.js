const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const register =require('./route/register')
app.use(express.static('./public'))
app.use(('/register'),register)

app.use(bodyparser.urlencoded({
    extended:true
}))


app.use((req,res)=>{
    res.send('404 notfound')
})


app.listen(3000)