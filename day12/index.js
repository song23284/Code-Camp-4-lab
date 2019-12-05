// setTimeout(() => {
//     console.log("a")
//     setTimeout(() => {
//         console.log("b")
//         setTimeout(() => {
//             console.log("c")
//             setTimeout(() => {
//                 console.log("d")

//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

let promise = new Promise((resolve,reject)=>{
   
     let answer = false;
     if(answer == true){
          resolve("yehyeh")
     }else if(answer == false){
       reject("bapailaw")

     }


})
promise.then((result) => {
    console.log(result)

}).catch((err)=>{
    console.log(err)

})