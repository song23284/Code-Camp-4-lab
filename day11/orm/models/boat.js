module.exports = (sequelize,Datatype)=>{


 const boat = sequelize.define('boat',{


    name:{type:Datatype.STRING(255),
        validate:{
            min:1,
            max:100
        }
    },
    color:{type:Datatype.STRING(45)}




 }) 
 boat.associate = (models)=>{
     boat.belongsToMany(models.sailor,{through:models.reserve})
 }

return boat

}