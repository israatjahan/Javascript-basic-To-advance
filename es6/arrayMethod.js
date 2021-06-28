// find (callback ,value)  return the value of the first element that pass certain condition

let numbers = [53,56,25,23,67];
let firstEvenNumber = numbers.find(x=> x%2===0 );
console.log(firstEvenNumber)


const evenNumber =(value,index,array)=>{
    if (value % 2 ===0)
    return value;
}
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
console.log (firstEvenNumberIndex)



//using objects=

const students =[
    {
        id : 103,
        gpa : 4.89
    },
    {
        id : 104,
        gpa : 3.5
    },
    {
        id : 105,
        gpa : 5
    },

]
console.log(students.find(x => x.gpa>4))