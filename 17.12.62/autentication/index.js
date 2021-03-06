const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userServices = require('./services/user')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = require('./models')

const passport = require('passport')

app.use(passport.initialize())

require('./config/passport/passport')


db.sequelize.sync({force:false}).then(()=>{

    userServices(app,db)

    app.listen(8080,()=>{
        console.log('server is runing or port 8080')
    })

})