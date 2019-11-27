module.exports = (sequelize,DataTypes)=>{
    const Sailor = sequelize.define('sailor',{
        name:{
            type:DataTypes.STRING(45)
        }, 
        rating:{
            type:DataTypes.INTEGER
        },
        age:{
            type:DataTypes.DOUBLE
        }
    })
    return Sailor; 
}