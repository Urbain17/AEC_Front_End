var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0, 190);

ctx.arcTo(150, 20, 150, 70, 50);
ctx.stroke();