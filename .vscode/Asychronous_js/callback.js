// function square (x){
//     console.log(`square of ${x} :${x*x}`);
    
// }
// square(5);

// // const y = square;
// // y(5);

// function higherOrderFunction (num, callback){
//    callback(num)
// }
// higherOrderFunction(5,square)



// anotherwise
// synchronous programing

const taskOne = (callback) =>{
    console.log("Task1");
    callback();
};

//asynchronous part start
 const taskTwo=(callback)=>{
     setTimeout(() => {
         console.log("Task2.DataLoading");
         callback();
     }, 3000);
 };
    
    //asynchronous part end


const taskThree = (callback) =>{
    console.log("Task3");
    callback();
};
const taskFour = () =>{
    console.log("Task4");
};


taskOne(function f1(){
    taskTwo(function f2(){
        taskThree( function f3(){
           taskFour();
        });
    });
});

// using anoynomous function can write it:=

taskOne(() =>{
    taskTwo(() =>{
        taskThree(() =>{         //nasted callback
           taskFour();
        });
    });
});



console.log("hi")
document.querySelector("Button").addEventListener("click",() => {
    console.log("Button is clicked"); //button used here
});
console.log("bye bye");