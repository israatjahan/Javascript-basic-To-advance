function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity){
if(watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0){
    console.log("It can't be counted negative value");
}
 else{
     var watch = 50*watchQuantity;
     var phone = 100*phoneQuantity;
     var laptop = 500*laptopQuantity;
     totalAmount=(watch+phone+laptop);
 }
 return totalAmount;
}

var budgetCost = budgetCalculator(14,12,23);
console.log(budgetCost);