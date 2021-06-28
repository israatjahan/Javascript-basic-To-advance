var number = 98;
var result = number > 0 ? "positive" : "negative";
console.log(result);

var number = 0;
var result2 = number > 0 ? "positive" : number < 0 ? "negative" : "zero";

console.log(result2);

var num1 = 1;
var num2 = 4;
var num3 = 2;

var results =
  num1 > num2
    ? console.log(num1)
    : num2 > num3
    ? console.log(num2)
    : console.log(results);

    


