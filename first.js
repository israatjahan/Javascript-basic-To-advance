var bananaPrice = 12;
console.log(bananaPrice);
var seenAfter = 21;
console. log (typeof seenAfter);
var name ="israt jahan";
console.log(typeof name);
var isHot = true;
var isRich = false;
console.log(isRich);
var promise = "I promise i will be good at programing";
console.log(promise.toLowerCase());
var promise ="I promise i will be good at programing";
console.log(promise.toUpperCase())
var promise ="I promise i will be good at programing";
console.log(promise.indexOf('will'));
var promise ="I promise i will be good at programing";
console.log(promise.indexOf('pro'));
var promise ="I promise i will be good at programing";
console.log(promise.indexOf('what'));
var promise ="I promise i will be good at programing";
console.log(promise.split('I'));
var promise ="I promise i will be good at programing";
console.log(promise.split(' I '));

// // integer float parseInt parsefloat type
var number1= 25;
var number2=15.5;
console.log(number1+number2)
// if i take number2 as a string then
var number1=25;
var number2='15.5';
console.log(number1+number2)

// for making this string number2 as a number I have to do this
var number1=25;
var number2='15.5';
number2=parseFloat(number2);
console.log(number1+number2)

var number1=25;
var number2='15.5';
number2=parseInt(number2);
console.log(number1+number2)

// again to make number1 to make string then have to add empty string ''

var number1=25;
var number2=15.5;
number1=''+(number1);
console.log( typeof number1)

// // to fix the decimal after adding two or many number
var number1=0.1;
var number2=0.2;
var total=number1+number2;
total=total.toFixed(1); /*here () to take any decimal number to see how many number will be shown*/
console.log(total)

//  mathmatical operation in javscript (mod 12-7)
var price1=25;
var price2=35;
var total= price1+price2;
console.log(total)

var price1=25;
var price2=35;
var total= price2-price1;
console.log(total)

var price1=25;
var price2=35;
var total= price1*price2;
console.log(total)

var price1=25;
var price2=35;
var total= price1/price2;
console.log(total)

var price1=5;
var price2=31;
var total= price1 % price2;
console.log(total)

var price1=25;
var price2=35;
price2++
console.log(price2);

var price1=25;
var price2=35;
price2--
console.log(price2)


// 12-8 Math absolute round floor ceil random

var number= -5;
var absoluteNumber= Math.abs(number);
console.log(absoluteNumber); /* (absolute) it make number into positive or plus number*/

var number= 5.433333;
var result= Math.round(number);
console.log(result);

var number= 5.546;
var result= Math.round(number);
console.log(result);

var number= 3.433333;
var result= Math.ceil(number);
console.log(result);

var number= 3.433333;
var result= Math.floor(number);
console.log(result);

var number= 13.433333;
var result= Math.random(number);
console.log(result);

var number= Math.random()*100;
var result= Math.random(number);
console.log(result);

var number= Math.random()*100;
var result= Math.round(number);
console.log(result);









