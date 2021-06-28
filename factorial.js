//10!=1*2*3................................
// var factorial = 1;
// for (var i=1; i<=15;i++){
//    factorial= factorial*i
//     console.log(i,factorial);
// }

//using the function
function factorial(num){
    var factorial =1;
    for(var i =1; i<num; i++){
        factorial=factorial*i;
    }
    return factorial;
}
var result = factorial(10);
console.log(result);

