// try catch handle " run time errors"


// try {
    
//     alert("hi everyone");
//     alert(x);
    
// }
// catch(err){
//     console.log(err);

// }finally{
//     alert("Bye everyone");
// }


//using throw
// the throw statement ->can create custom errors.

document.querySelector("#checkButton").addEventListener("click",function(){
   var num = document.querySelector("#numTextfield").value

   try {
        if(num<5)
        {
            throw "input is too low"

        }else if (num> 10)
        {
            throw "input is  too high"
        }
    


   }catch(err){
       console.log(err);
   }
});

