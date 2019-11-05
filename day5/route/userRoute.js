let express = require('express')
let router = express.Router()

// router.get('/first',(req,res) =>{
//     res.send("helo this is fist ")

// })

// router.get('/second',(req,res) =>{
//     res.send("helo this is second ")
// })
// router.get('/',(req,res)=>{
//     res.send(req.query.id)
// })


router.get('/:id',(req,res)=>{
    console.log(res)
    console.log(req)

    res.send("user not found")
})


router.get('/add/:a/:b',(req,res)=>{
   
    let a =  req.params.a
    let b = req.params.b

    res.send( ` ${parseInt(a)+parseInt(b)}  ` )
}    )

module.exports = router