//using length:--
var length =document.querySelectorAll(".myButton").length;
for (var i=0; i<length; i++){
    document
    .querySelectorAll(".myButton")[i]
    .addEventListener("click", function () {
      var text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " " + "is clicked";
    });
  }




//using for loop

//   for (var i=0; i<4; i++){
//     document
//     .querySelectorAll(".myButton")[i]
//     .addEventListener("click", function () {
//       var text = this.innerHTML;
//       document.querySelector("h1").innerHTML = text + " " + "is clicked";
//     });
//   }


// in a normal way:--
// document
//   .querySelectorAll(".myButton")[1]
//   .addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " " + "is clicked";
//   });

// document
//   .querySelectorAll(".myButton")[2]
//   .addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " " + "is clicked";
//   });

//   document.querySelectorAll(".myButton")[3].addEventListener("click",function(){
//       var text = this.innerHTML;
//       document.querySelector('h1').innerHTML = text +" "+ "is clicked"
//   });