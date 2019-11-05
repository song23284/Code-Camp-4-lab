var express = require('express')
var bodyParser = require('body-parser')
var dataroute = require('./route/dataroute')
var app = express()


app.use(express.static('public'))
app.use(bodyParser.json())

app.use('data', dataroute)

app.listen(3000)
