
module.exports = (sequelize,DataType)=>{
    const comment = sequelize.define('comment',{
        message:{
            type:DataType.STRING(255)
        }
    })

    return comment
}




// module.exports = (sequelize,Datatype)=>{

//     const comment = sequelize.define('comment',{
//         message:{
//             type:Datatype.STRING(255)
//         }
//     })

//     return comment
// }