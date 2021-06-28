//letter grade using operator
var marks = prompt ("enter your marks : ");
if (marks > 100 || marks <0)
console.log("Invalid mark")
else if (marks>=80 && marks<=100)
console.log("A+");
 else if (marks>=70 && marks<=79)
console.log("A");
else if (marks>=60 && marks<=69)
console.log("A-");
else if (marks>=50 && marks<=59)
console.log("B");
else if (marks>=40 && marks<=49)
console.log("C");
else if (marks>=33 && marks<=29)
console.log("D");
else 
console.log("Fail");
