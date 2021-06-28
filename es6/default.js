function message( text = "hello this is default parameter"){
    console.log(`${text}`)
}
message();
message("I love js es6");


//rest parameter;

function sum(x,y,...z){
    console.log(`x =${x},y=${y} ,z=${z}`)
} //in rest parameter it use in the end and gives output in pack.

sum(4,6,7,3,90);