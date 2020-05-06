const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())



db.sequelize.sync({force:true}).then(()=>{

    app.listen(8080,()=>{
        console.log('server runing in port 8080')
    })
})

// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const db = require('./models')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))


// db.sequelize.sync({force:false}).then(
//     ()=>{

//         app.listen(8080,()=>{
//             console.log('server running or port 8080')
//         })
//     }
// )