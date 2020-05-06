module.exports = (sequelize,DataType)=>{

  const friend = sequelize.define('friend',{
      status:{
          type:DataType.ENUM('requset','friend','block')
      }
  })
  return friend
}









// module.exports = (sequelize,DataType)=>{
//     const friend = sequelize.define('friend',{
//         status:{
//             type:DataType.ENUM('request','friend','block')
//         }
//     })

//     return friend
// }