

//chalange
//1.1
array1 = [1, 2, 30, 400]
array2 = array1.map(x => x * 2)
array2
//1.2
array1 = [1, 2, 3, 4]
array2 = array1.map(x => String(x))
array2
//1.3
array1 = [1, '1', 2, {}]
array2 = array1.map(x => typeof (x))
array2

//1.4
array1 = ['appale', 'banana', 'orange']
array2 = array1.map(x => x.toUpperCase())
array2

//1.5
array1 = [{ name: 'apple ', age: 14 },
{ name: 'banana ', age: 18 },
{ name: 'watermalon ', age: 32 },
]
array2 = array1.map(x => x.name)
array2
//1.6
array2 = array1.map(x => x.age)
array2

//1.7
array1 = [{ name: 'apple', surname: 'LONDON' },
          { name: 'banana', surname: 'BANGKOK' },
          { name: 'watermalon', surname: "Singapore" },
]
array2 = array1.map(x => x.name +' '+ x.surname)
array2
//1.8
array1=[1,3,3,4,5,6,7,8]
array2=array1.map(x=>x%2==0 ? 'even':'odd')
array2
//1.9
array1=[1,-3,2,8,-4,5]
array2=array1.map(x=>Math.abs(x))
array2
//1.10
array1=[100,200.25,300.84,400.3]
array2=array1.map(x=>x.toFixed(2))
array2

//1.11 array


array1 = [{ name: 'apple', birth: '2000-01-01' },
          { name: 'banana', birth: '1990-10-10' },
          { name: 'watermalon', birth: "1985-12-30" },
]
// array2 = array1.map(x=>({...x,age:String( 2020-x.birth.slice(0,4))}))
array2 = array1.map(x=>({...x,age:String(2020- new Date(x.birth).getFullYear())}))
array2

date2 = new Date('1995-12-17')

console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDay());


//.12
array1 = [{ name: 'apple', birth: '2000-01-01' },
          { name: 'banana', birth: '1990-10-10' },
          { name: 'watermalon', birth: "1985-12-30" },
]

array2 = array1.map(x=>(`
 <tr>
 <td>${x.name}</td>
 <td>${new Date( x.birth)}</td>
 </tr>
`))
array2
/////////////////////////////////////
/////2///
////
//2.1
array1 = [1, 2, 30, 400]
array2 = array1.filter(x=>x>10)
array2
//2.2
array1=[1,2,3,4]
array2=array1.filter(x=>x%2!=0)
array2

a=3
typeof(a)
console.log(typeof(a));
//2.3
array1=[1,'1',2,{}]
array2=array1.filter(x=>typeof(x) == 'number')
array2

//2.4

array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
array2=array1.filter(x=>x.length>6)
array2


//2.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]


array2=array1.filter(x=>x.age<18)
array2
//2.6
array1=[ { name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 }
]
array2=array1.filter(x=>x.age!=32)
array2


//2.7
array1 = [1, -3, 2, 8, -4, 5]
array2 = array1.filter((x => x > 0 ))
array2


//2.8

array1 = [1,3,4,5,6,7,8]
array2=array1.filter(x =>x%3==0)
array2


// 2.9
array1 = ["peach", 1, -3, "2", {}, []]
array2=array1.filter(x => typeof(x) == 'string'   )
array2


//2.10

array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2=array1.filter(x => x == x.toUpperCase()   )

array2


//2.11
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
array2=array1.filter(x =>(new Date(x.birth).getMonth() == 9 ) 


) 
console.log();
array2

//2.12

array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
  array2=array1.filter(x =>(new Date(x.birth).getFullYear() <2000 ) )

  array2

