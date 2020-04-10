module.exports = (sequelize,DataType)=>{

    const sailor = sequelize.define('sailor',{
        name:{type:DataType.STRING(255)},
        rating:{type:DataType.INTEGER},
        age:{type:DataType.DOUBLE},
    })


    sailor.associate = (models)=>{
        sailor.belongsToMany(models.boat,{through:models.reserve})
    }


    return sailor
} 