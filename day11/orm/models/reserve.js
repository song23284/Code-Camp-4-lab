module.exports = (sequelize,DataType)=>{

   const reserve = sequelize.define('reserve',{

     date:{type:DataType.DATE}          

   })



   return reserve
}