const express = require('express')
const app = express( )
const db = require('../models')
const boatService = require('../services/boat')
const sailorService = require('../services/sailor')
const reserveService = require('../services/reserve')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
db.sequelize.sync({force:false}).then(()=>{
    boatService(app,db)
    sailorService(app,db)
    reserveService(app,db)

 app.listen(8080,()=>{
     console.log("server run in 8080 ")
 })

})