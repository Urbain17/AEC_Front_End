// Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1

/*var celsius;

for (var f = 10; f<=20; f=f+1){
    celsius = (5/9)*(f-32);
    document.write(f + " Fahrenheit = " + celsius + " Celsius <br>");
}
*/
var fahrenheits;
for(var c=10;c<=20;c++){
    fahrenheits = (c * (9/5)) + 32;
    document.write(c + " Celcius = " + fahrenheits.toFixed(2) + " Fahrenheits<br>");
}
