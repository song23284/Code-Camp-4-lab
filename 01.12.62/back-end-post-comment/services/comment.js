module.exports = (app,db)=>{
    app.get('/comments',(req,res)=>{
        db.comment.findAll().then(
            result =>{
                res.status(200).json(result)
            }
        ).catch(err => {
            console.log(err);
            res.status(400).json({message:err.message})
        })
    })
}