let express = require('express')
let dog = express.Router()

dog.get('/walk',(req,res) =>{
    res.send("go go jojo")
})


dog.get('/play',(req,res) =>{
    res.send("play play go jojo")
})
module.exports =  dog;