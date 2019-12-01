let  = (str,key)=>{
    str.toUpperCase()
    let enc ="";
    for(let c of str){
        enc += String.fromCharCode((c.charCodeAt(0)-65+key)%26+55)
    }
    return enc;
}

let arrayy = [0,1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for(let i of arrayy){
    if(i%2 !==0 ){
    sum += i;
}
}