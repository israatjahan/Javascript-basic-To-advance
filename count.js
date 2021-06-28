var speech = " I am good person what about you I don't snore at night";

var count = 0;
for (var i= 0; i<speech.length; i++){

    var char = speech[i];
    if(char ==" " && speech [i-1] !=" "){
        count++;
    }
}
count++;
console.log(count);


var talk =" I have to work hard stay focused and have to done lot more thing"

var count = 0;

    for (var i = 0; i<talk.length;i++){
        var char = talk [i];
        if (char == " " && talk[i-1] !=" "){
            count++;
        }
    }
count++;
console.log(count);

var talking =" i am trying to learn code but its seems so tough to me "
var count = 0;
for (var i=0; i<talk.length; i++){
    var char = talk [i];
    if (char == " " && talk[i-1] !=" "){
        count++;
    }
}
count++;
console.log(count);

var talk =" what the hack I am doing now, I have to be more focused in coding";
var count= 0;
for (var i= 0; i< talk.length; i++){
    var char = talk[i];
    if( char == " " && talk [i-1] !=" "){
        count ++;
    }

}
console.log (count);








