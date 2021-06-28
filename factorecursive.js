for (var i= 102; i>=1;i--){

}
var i = 10;
while(i>=2){
    i--;
}
console.log(i);

//call function in between function
function factorial (n){
    if (n == 0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);