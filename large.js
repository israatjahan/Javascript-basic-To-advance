var num1 = prompt ("enter num1 :");
var num2 = prompt ("enter num2 :");
var num3 = prompt ("enter num3 :");

if (num1>num2 && num1> num3)
console.log("large number = " +num1);

else if (num2>num1 && num2>num3)
console.log("large number =" +num2);

else 
console.log("large number is =" +num3);

//vowel const

var letter = prompt ("Enter a letter :");
letter = letter.toLowerCase();

if (letter == "a" || letter == "e"|| letter == "i" || letter =="o" || letter == "u")
console.log("vowel");
else
console.log("consonant");