let express = require('express')
let cat = express.Router()

cat.get('/eat',(req,res) =>{
    res.send("eat eat jojo")
})


cat.get('/sleep',(req,res) =>{
    res.send("sleep sleep go jojo")
})
module.exports =  cat;