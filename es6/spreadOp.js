
function addNumber(x,y,z){
    return x+y+z;
}
let number =[1,2,3]

// console.log(addNumber(numbers[0],numbers[1],numbers[2],numbers[3])); //in a normal way

//using spread
console.log(addNumber (...number));


let newArray = [5,6,...number]  // we can use spread (...)parameter anywhere
console.log(newArray);



let numbers1 = [4,5,6]
let numbers2 = [7,8,9]

// let numbers = [numbers1.concat(numbers2)];using concating function

let numbers = [...numbers1,...numbers2] //using spread operator.
console.log(numbers);

// spread operator with object :

let object1 ={
    name: "israt",
    age: 20
}

let object2 ={
    nationality: "Bangladeshi",
    occupation: "teacher"
}

let object = {...object1, ...object2}
console.log(object);






