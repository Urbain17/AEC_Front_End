// Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

/*var carre;
var cube;

for (var i=0; i<=10; i++){
    carre = i*i;
    cube = i*i*i;
    document.write(i + " carré de i = " + carre + " cube de i = " + cube + "<br>");
}
*/

var carre, cube;
for(var i=1;i<=10;i++){
    carre = Math.pow(i,2);
    cube = Math.pow(i,3);
    document.write(i + " au carré =  " + carre + " au cube = " + cube + "<br>");
}

