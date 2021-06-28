
var canvas = document.getElementById("myCanvas");

 var context = canvas.getContext("2d");
 

 context.strokeRect(10, 10, 380,280)
 context.strokeStyle = "black";

 context.fillStyle = "green";
 context.fillRect(12,12,375,275);

 var centerX = canvas.width / 2;
 var centerY = canvas.height / 2;

 context.beginPath();
 context.arc(centerX, centerY,80,0,2*Math.PI,false);
 context.fillStyle="red";
 context.fill();
 context.stroke();

 