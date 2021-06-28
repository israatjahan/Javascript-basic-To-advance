// document.querySelector("button").addEventListener("click", myFunction);

var myFunction = document.querySelector("h1");

myFunction.addEventListener("mouseover", function () {
  myFunction.classList.add("my-style");
});

myFunction.addEventListener("mouseout", function () {
  myFunction.classList.remove("my-style");
});


var myEvent = document.querySelector("h2");
myEvent.addEventListener("mouseover", function () {
  myEvent.classList.add("my-style2");
});

myEvent.addEventListener("mouseout", function () {
  myEvent.classList.remove("my-style2");
});


var myPara = document.querySelector("p");
myPara.addEventListener("mouseover", function () {
  myPara.classList.add("my-style3");
});
myPara.addEventListener("mouseout", function () {
  myPara.classList.remove("my-style3");
});

