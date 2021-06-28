//object literals 
function studentInfo1 (name, age){
    return {
        name: name,
        age : age
    }
}
console.log(studentInfo1("Israt Jahan", 20));

//concise method and syntex

let message ={
    body(){
        return `Hi i am object function`
    }
}
console.log(message.body())

