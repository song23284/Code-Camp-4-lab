module.exports = ( sequelize,Datatypes) =>{

 const comment = sequelize.define('comment',{
     athor:{
         type:Datatypes.STRING(50)
     },
     text:{
        type:Datatypes.STRING(500)

     }

 })

  return comment

}