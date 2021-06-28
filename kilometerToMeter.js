
// function kilometerToMeter (km){
//     var meter = km*1000;
//     return meter;
// }
// var number = 10;
// var meterIs =  kilometerToMeter (number);
// console.log(meterIs);


function kilometerToMeter(kilometer){
    if (kilometer <0){
        console.log("Not valid ,it is a negative number");
    }
    else {
        var meter = kilometer*1000;
        return meter;
    }
}
var result = kilometerToMeter(20);
console.log(result);