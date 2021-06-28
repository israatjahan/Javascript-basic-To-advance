
// function getArraySum(numbers){
//     var sum=0;
//     for(var i=0;i<numbers.length;i++){
// var element =numbers[i];
// sum= sum+element;
// }
// return sum;
// }
// var numbers= [45,65,78,12,3,54,65]
// var result = getArraySum(numbers);
// console.log("total of the numbers:",result);

// var total =getArraySum([45,4,54,64,7]);
// console.log("total of the numbers:",total);

function getArraySum(numbers){
    var sum= 0;
    for(var i=0;i<numbers.length; i++){
        var element = numbers[i];
        sum= sum+element;
    }
    return sum;
}
var numbers=[23,34,23,67,87,3]
var result =getArraySum(numbers);
console.log("total of the numbers:",result);

var total =getArraySum([23,54,25,75,3]);
console.log ("total of the numbers:",total);


