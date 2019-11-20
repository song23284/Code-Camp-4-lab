const express = require("express")
const app = express()
const mysql = require("mysql")
const db =mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"23242526",
   database:'boatrental',
   port: '3307'


})

db.connect()

app.get('/b',(req,res)=>{

   let query ="select * from boats"
  
   db.query(query,(err,results)=>{
         res.json(results)
         res.send('sdasd')
   })


})
app.get('/addb',(req,res)=>{

     let query = `insert into boats(bid,bname,color)
      values (${req.query.bid},"${req.query.bname}","${req.query.color}")`
      
   db.query(query,(err,results)=>{
    if(err){
        console.log('somethong worng!!')

        console.log(err)

    }else{
        console.log("seccess")

    }
})

})


app.get('/db',(req,res)=>{

    let query =`delete from boats where bid=${req.query.db}`
   
    db.query(query,(err,results)=>{
        if(err){
            console.log('somethong worng!! db')
    
            console.log(err)
    
        }else{
            console.log(`delet seccess ${req.query.db}`)
    
        }
    })
 
 
 })

 app.get('/updateboat', (req,res)=>{
    let query = `UPDATE boats SET bname="${req.query.bname}" 
    WHERE bid="${req.query.bid}"`
    db.query(query, (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.json("Update Success")
        }
    })
})


app.listen(3001,()=>{
    console.log("success on port :3000")
})