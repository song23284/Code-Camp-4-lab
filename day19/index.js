function map(array,callback){
let result =[];
for(let i=0; i<array.lenght;i++){
 let newValie = callback(array[i],i,array)
 result.push(newValie)
}
return result;

}

console.log(map([1,2,3,4,5],x => x*2))