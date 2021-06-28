var marks =[45,35,77,24,67,89,20];
var max = marks[0];
for(var i =0; i<marks.length;i++){
    var element = marks[i];
    if (element > max){
        max = element;
    }
}
console.log("Highest value is :" , max);