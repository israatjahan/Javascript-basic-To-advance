var numbers =[ 10,20,30,30];
numbers.forEach(myfunction)
function myfunction(x)
{
  console.log(x)
}

//another way 
var numbers = [10,20,30,30];
numbers.forEach(function(x1){
    console.log(x1)
})


//If you want to put one array in another square type array

var numbers =[2,5,6,7,3,8];
var squareNum = [];
numbers.forEach(function(x){
    squareNum.push(x*x);
})
console.log(squareNum)

// if want to add+ number with the array then :

var numbers = [34,67,23,57,8,65,12];
console.log(numbers)
numbers.forEach(function(x,index,array){
    array[index] = x+2;
})
console.log(numbers)