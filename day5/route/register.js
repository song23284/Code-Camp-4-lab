
const express =require('express')
let register = express.Router()


register.get('/',(req,res)=>{
res.send('hahayou right')

})


register.get('/user',(req,res)=>{
    res.send(req.query.id)
    
    })
    
register.get('/:id',(req,res)=>{
    res.send(req.params.id)
    
    })

    register.get('/add/:a/:b',(req,res)=>{
        let a =parseInt(req.params.a)
        let b =parseInt(req.params.b)

        res.send(String(a+b))
       
        })
    


module.exports=register;