const express = require('express')
const app =express()
const bodyParser = require('body-parser')
const db = require('./models')
const passport = require('passport')
const userService = require('./services/user')

app.use(passport.initialize())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

require('./config/passport/passport')

db.sequelize.sync({force:false}).then(()=>{
    userService(app,db)

    app.listen(8080,()=>{
        console.log('server runing in port 8080')
    })
})