//loop example:

// var marks =[89,97,89,68,94];
// for(var i=0; i<marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }

//function example here:

// function add (number1,number2) {
//     var total = number1 + number2;
//     return total;
// }
// var result1 = add(65,89);
// console.log(result1);
// console.log("not adding this time");
// console.log("not eating this time");
// var result2 =add(144,568);
// console.log(result2);




function largestNumber(numbers){
var larger = numbers[0] ;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if(element > larger){
        larger=element;

        }
    
    }
    return larger;

}
var numbers =[65, 45, 23, 11,89,91,67,62];
var output = largestNumber(numbers);
// var output= largestNumber([54, 78, 89]);
console.log("output",output);