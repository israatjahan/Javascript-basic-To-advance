// undefine 1st type
let bird;
console.log(bird);

// 2nd
function add (num1,num2){
    console.log(num1+num2);
}
const result = add (13,82);
console.log(result);

// 3rd
function add (num1,num2){
    console.log(num1,num2);
}
const result = add (13);
console.log(result);

// 4th using object
const human ={name:"homo sapience",phone: 2493258};
console.log(human.cat);

let fun = undefined;
console.log(fun);

function doSomething(x,y){
    console.log(y);
}
doSomething(32);
