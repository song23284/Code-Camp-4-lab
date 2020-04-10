
module.exports = (app,db) =>{
    app.get('/boats', (req,res)=>{

    db.boat.findAll().then(
        (result)=>{res.status(201).json(result)})
    })

// module.exports = (app,db)=>{
//     app.get('/boats', async (req,res)=>{

//         let result = await db.boat.findAll()
//         res.status(201).json(result)
//     })
// }


   app.post('/boat',(req,res)=>{

      boatColor = req.body.color
      boatName = req.body.name

      db.boat.create({

        name:boatName,
        color:boatColor
      }).then((result)=>{
        res.status(201).json(result)
      }).catch((err)=>{
        res.status(400).json(err)

      })
   })

    // app.post('/boat',async (req,res)=>{
    //     boatColor = req.body.color
    //     boatName = req.body.name

    //   const result  =await  db.boat.create({
    //         name:boatName,
    //         color:boatColor
    //     })
    //     

    // })


    app.put('/boat/:id',async (req,res)=>{

        const result = await db.boat.update(
          {name:req.body.name,
            color:req.body.color
          },{
            where:{id:req.params.id}
          })

          res.status(200).json(result)
    })

    app.delete('/boat/:id',(req,res)=>{

     db.boat.destroy({where:{id:req.params.id}}).then((result)=>{
       res.status(200).json(result)
     }).catch((err)=>{
       res.status(400).josn(err)
     })

      
     
    })
}
