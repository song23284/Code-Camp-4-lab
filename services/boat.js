module.exports = (app, db) => {
    app.get('/boats', async (req, res) => {
        let result = await db.boat.findAll()
        .then((result)=>{
            res.status(201).json(result)

        }).catch((err)=>{
            res.status(400).json(err)

        }) 
    })


    // app.post('/boat', async (req, res) => {
    //     boatName  = req.body.name

    //     boatColor = req.body.color
    //     const result = await db.boat.create({
    //        name:boatName,
    //        color:boatColor

    //     })
    //     res.status(201).json(result)
    // })
    app.post('/boat', async (req, res) => {
        boatName  = req.body.name

        boatColor = req.body.color
        db.boat.create({
           name:boatName,
           color:boatColor

        }).then((result)=>{
            res.status(201).json(result)

        }).catch((err)=>{
            res.status(400).json(err)

        })
    })

    // app.put('sailors/:id',async(req,res)=>{
    //     try{
    //         res.status(201).json(
    //             await db.sailor.update(req.body,{where:{id:req.params.id }})
    //         )
          
    //     }catch(err){

    //     }
    // })

    app.put("/boat/:id",(req,res)=>{
    
        db.boat.update(
            {name:req.body.name,
             color:req.body.color
            },{
                where:{id:req.params.id}
            }
        ).then((result)=>{
            res.status(201).json(result)

        }).catch((err)=>{
            res.status(400).json(err)

        })

    })
    app.delete("/boat/:id",async(req,res)=>{
     db.boat.destroy({
        where:{id:req.params.id}

     }).then((result)=>{
         res.status(204).json(result)
     }).catch((err)=>{
        res.status(400).json(err)
    })
        
    })
}  