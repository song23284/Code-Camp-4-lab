module.exports = (sequelize,DataTypes)=>{

    const Sailor = sequelize.define('sailor',{
        name:{
            type:DataTypes.STRING(45)
        }, 
        rating:{
            type:DataTypes.INTEGER,
            validate:{
                customvalidate(val){
                    if(val>10){
                        throw new Error("20-40 60-80")

                    }
                    }
                }
        },
        age:{
            type:DataTypes.DOUBLE,
            validate:{
                customvalidate(val){
                    if (!(val >=20 && val<=40) ||(val >=60 && val<=80)){
                    throw new Error("20-40 60-80")
                    }
                }
            }
        }
    })
    Sailor  .associate = (models)=>{
        Sailor.belongsToMany(models.boat,{through: models.reserve })
    }
    return Sailor;   
}