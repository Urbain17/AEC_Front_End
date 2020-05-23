

/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var gradient = ctx.createRadialGradient(110,90,30,100,100,70);

gradient.addColorStop(0, 'pink');
gradient.addColorStop(.9, 'red' );
gradient.addColorStop(1, 'black');


ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);*/

paypal.Buttons({
    style: {
        layout:  'vertical',
        color:   'blue',
        shape:   'rect',
        label:   'paypal'
    }
}).render('#paypal-button-container');