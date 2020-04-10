const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models')
const boatService = require('./services/boat')
const sailorService = require('./services/sailor')
const reserveService = require('./services/reserve')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

db.sequelize.sync({force:false}).then(()=>{

    boatService(app,db)
    sailorService(app,db)
    reserveService(app,db)
    app.listen(8080,()=>console.log('Running on port 8080'))
})
 