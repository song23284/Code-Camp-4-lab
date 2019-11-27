module.exports = (sequelize,DataTypes)=>{
    const boat = sequelize.define('boat',{
        name:{
            type:DataTypes.STRING(45)
        },
        color:{
            type:DataTypes.STRING(45)
        }
    })
    return boat; 
}