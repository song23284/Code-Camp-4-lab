var express = require('express')
var bodyParser = require('body-parser')
var dataroute = require('./route/dataroute')
var app = express()
const axios = require('axios');


app.use(express.static('public'))
app.use(bodyParser.json())

app.use('data', dataroute)

axios.get('https://reqres.in/api/users')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
   
  });

app.listen(3000)

