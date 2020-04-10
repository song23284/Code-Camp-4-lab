module.exports = (app, db) => {


    app.get('/sailors', (req, res) => {

        db.sailor.findAll({include:[db.boat]}).then((result) => {

            res.status(200).json(result)
        }).catch((err) => {
            res.status(400).json(err)
        })
    })

    app.post('/sailor', (req, res) => {

        db.sailor.create({
            name: req.body.name,
            rating: req.body.rating,
            age: req.body.age

        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            res.status(400).json(err)
        })

    })

    app.put('/sailor/:id',(req,res)=>{
        db.sailor.update({
            name:req.body.name,
            rating:req.body.rating,
            age:req.body.age
        },{where:{
            id:req.params.id
        }}).then((result)=>{
            res.status(201).json(result)
        }).catch((err)=>{
            res.status(400).json("something wrong")
        })
    })


    app.delete('/sailor/:id', (req, res) => {

        db.sailor.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(200).josn(result)
        }).catch((err) => {
            res.status(400).json(err)
        })
    })











}