function findkukee( inb ){

   if ((inb %2 )== 0){
             
    console.log("คู่")

   }else{
    console.log("คี่")

   }
}

function findabs( a,b ){

   a=a
   b=b
   
   if (a>b){
     console.log(a-b)
   }else
   {
    console.log(b-a)
    
   }
}

// findmn( 100,20,1 )
function findmn( a,b,c ){


if(a>b && a>c){
  console.log(a)
}else if(b>a && b>c){
  console.log(b)
}else{
  console.log(c)

}

}
// e()
 function e (){
 i= 10
 console.log(i)

 buket=0
 while(i>0){
    buket += i
    i--
 }
console.log(buket)
 }

degtobin()
function degtobin(input){
  console.log(input)
  
  let sum= ""
  while(input>0){

    sum =(input%2)+sum
    Math.floor(input/2)
    
  }
    
  console.log(sum)


}

