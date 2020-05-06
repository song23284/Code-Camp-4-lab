module.exports = (sequelize,DataType)=>{
    const user = sequelize.define('user',{
        username:{
            type:DataType.STRING(255)
        },
        password:{
            type:DataType.STRING(255)

        },
        name:{
            type:DataType.STRING(500)
        },
        image_url:{
            type:DataType.STRING(500)
        }

    })

        user.associate  =(models)=>{
            user.hasMany(models.comment,{foreignKey:'user_id'})
            user.hasMany(models.post,{foreignKey:'user_id'})
            user.belongsToMany(user,{as:'request_from',foreignKey:'request_from_id',through:models.friend})
            user.belongsToMany(user,{as:'request_to',foreignKey:'request_to_id',through:models.friend})

        }

    return user
}
// module.exports = (sequelize,DataType)=>{
//     const user = sequelize.define('user',{
//         username:{
//             type:DataType.STRING(255)
//         },
//         password:{
//             type:DataType.STRING(255)

//         },
//         name:{
//             type:DataType.STRING(255)
//         },
//         image_url:{
//             type:DataType.STRING(500)
//         }
//     })

//     user.associate=(models)=>{
//         user.hasMany(models.post,{foreignKey:'user_id'})
//         user.hasMany(models.comment,{foreignKey:"user_id"})
//         user.belongsToMany(user,{as:'request_to',foreignKey:'request_to_id',through:models.friend})
//         user.belongsToMany(user,{as:'requset_from',foreignKey:'request_from_id',through:models.friend})
//     }


//     return user
// }