let express = require("express")
let app = express()
let mysql = require("mysql")
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"23242526",
    database:"sailor",
    port:"3306"

})


db.connect()

app.get('/',(req,res) => {
    res.send("sdasd")
})