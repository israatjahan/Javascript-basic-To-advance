function msg (){
    return "Hi I am israt";
}

const msg3=()=>"hi i am learning arrow function";
// console.log(msg());
// console.log(msg3());

function add (num1,num2){
    return num1 + num2;
}
// console.log(add(10,20));

// //arrow function
const add2 =(num1,num2)=> num1+num2;
console.log(add2(3,4));



var student =[
    {
        id: 102,
        Name: 'israt',
        cgpa: 2.56
    },

    {
        id: 103,
        Name: 'nusrat',
        cgpa: 3.10
    },

    {
        id: 104,
        Name: 'barat',
        cgpa: 2.89
    },

    {
        id: 105,
        Name: 'rata',
        cgpa: 3.56
    },
]
// show who have avobe 3 cgpa using traditional func
function studentNames(){
   return student.filter(function(x){
      return x.cgpa > 3
   })
   .map(function(y){
       return y.Name;
    });

     
}
console.log(studentNames());


 //using arrow function

//  const studentName2 = ()=> student.filter((x) => x.cgpa>3).map ((y) => y.Name);
 
//  console.log(studentName2())

 const products =[
     {id :1,name: "watch",price:300},
     {id :3,name: "phone",price:40},
     {id :4,name: "tv",price: 500}
 ];

 //map
 const names = products.map(product=>product.name);
 const prices=products.map(product=> product.price)
//  console.log(prices);

 //forEach 

const cheaper = products.filter(product=> product.price<100);
// console.log (cheaper);
 
//removing an item from
const remaining = products.filter(product=> product.id !=2);
console.log(remaining);