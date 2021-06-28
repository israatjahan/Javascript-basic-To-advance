const year = 2009;
let reminder = year % 4;
if (reminder == 0){
    console.log("your year is leap year " );

}

else {
    console.log("year is not leap year");
}

//using function
const check2000 = isLeapYear(2003);
console.log(check2000);
function isLeapYear(year){
    const reminder = year%4;
    if(reminder == 0){
        return true;
    } else {
        return false;
    }
}