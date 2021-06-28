
//function inside array type 1:-
function evenify(num){
    if (num% 2 == 0){
        console.log(num ,'is even number')
    }
    else{
        console.log(num*2,'is odd number')
    }
}

function evenify_all(numbers){

    for ( let i=0; i< numbers.length; i++){
        const num = numbers [i];
        evenify(num)
}
}

numbers = [3,4,7,24,87,42,8,1];
evenify_all(numbers)


friends_age = [13,32.14,17,18];
   evenify_all(friends_age);

   //fumction type 2:-



function evenify_all(numbers){

    for ( let i=0; i< numbers.length; i++){
        const num = numbers [i];
        if (num% 2 == 0){
            console.log(num ,'is even number')
        }
        else{
            console.log(num*2,'is odd number')
        }
}
}

numbers = [3,4,7,24,87,42,8,1];
evenify_all(numbers)


friends_age = [13,32.14,17,18];
   evenify_all(friends_age); 

   



// function evenify (num){
//     var result ;
//     if ( num % 2 == 0){
//         result = num;
//     }
//     else {
//         result = num*2;
//     }
//     return result;

// }

// var result = evenify(13);
// var square = result*result;
// console.log('square', square);