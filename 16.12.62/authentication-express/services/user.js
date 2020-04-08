const passport = require('passport')


module.exports = (app,db)=>{
    app.post('/registerUser',(req,res,next)=>{
        passport.authenticate('register',(err,user,info)=>{
            if(err){
                console.log('gogojojo')
              console.error(err);   
            }
              if(info !== undefined){
               console.error(info.message);
               res.status(403).send(info.message)
            } else {
                const data={
                    name:req.body.name,
                    username:user.username,
                    role:'user'
                }
                db.user.findOne({
                    where:{username:data.username}
                }).then(user =>{
                    user.update({
                        name:data.name,
                        role:data.role
                    }).then(()=>{
                        console.log('user created in db')
                        res.status(200).send({message:'usercreated'})
                    }).catch(err =>{
                        console.log(err);
                        res.status(400).json({message:err.message})
                        
                    })
                }).catch(err =>{
                    console.log(err);
                    res.status(400).json({message:err.message})
                    
                })
            }
             
            
        })(req,res,next)
    })
}