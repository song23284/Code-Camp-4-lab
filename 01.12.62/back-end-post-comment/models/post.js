module.exports = (sequelize ,datatype)=>{
    const post = sequelize.define('post',{
        autor:{
            type :datatype.STRING(100)

        },
        text:{
            type :datatype.STRING(500)

        },
        picture:{
            type :datatype.STRING(300)
        }
    })

    post.associate = function(models){
        post.hasMany(models.comment,{foreignKey:'post_id'})
    }
    return post
}