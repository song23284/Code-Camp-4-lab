
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const postService = require('./services/post')
const commentService = require('./services/comment')


const db = require('./models')

app.use(bodyParser.json( ))
app.use(bodyParser.urlencoded({extended:true}))


db.sequelize.sync({fore:true}).then(()=>{
   
    postService(db,app)
    commentService(db,app)
    app.listen(8080,()=>{
        console.log('Server is Runing onport 8080')
    })
    
})