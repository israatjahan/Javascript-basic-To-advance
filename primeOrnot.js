
function isPrime(n){
    for(i = 2; i<n; i++){
        console.log(i,n%i);
        if(n%i == 0){
            return "Not prime number";
            
        }
        }
        return "your number is a prime number";
}
 var result = isPrime(339);
 console.log(result);

