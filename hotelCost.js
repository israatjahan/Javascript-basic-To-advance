function hotelCost(x){
    if(x >=1 && x <= 10){
        return x * 100;
    }
    else if(x >= 11 && x <= 20){
        return 10 * 100 + (x -10) * 80;
    }
    else if (x >= 21){
        return (10 * 100) + (10 * 80) + (x - 20) * 50;
    }
        
}
var result= hotelCost(12);
console.log (result);


















