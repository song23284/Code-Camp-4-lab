let express = require("express")
let app = express();
let bodyParser = require("body-parser")

let userRoute = require('./route/userRoute')
let cat = require('./route/cat')
let dog = require('./route/dog')

app.use(express.static('./public/'))
app.use('/user',userRoute)
app.use('/cat',cat)
app.use('/dog',dog)
app.use(bodyParser.urlencoded({

    extended:true

}))




app.listen(3000)