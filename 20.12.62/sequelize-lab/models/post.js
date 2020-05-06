module.exports = (sequelize,DataType)=>{
    const post = sequelize.define('post',{
        message:{
            type:DataType.STRING(255)

        },
        img_url:{
            type:DataType.STRING(255)
        }
    })

    post.associate =(models)=>{
        post.hasMany(models.comment,{foreignKey:'post_id'})
    }


    return post
}
// module.exports = (sequelize,DataType)=>{

//     const post = sequelize.define('post',{
//         message:{
//             type:DataType.STRING(255)
//         },
//         img_url:{
//             type:DataType.STRING(500)
//         }


//     })
// post.associate = (models)=>{
//     post.hasMany(models.comment,{foreignKey:'post_id'})
// }

//     return post
// }