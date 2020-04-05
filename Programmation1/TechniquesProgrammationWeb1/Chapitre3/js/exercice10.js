// Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

/*var taxe;


for (var montant=5; montant<=100; montant=montant+5){
    taxe = montant*(9/100);
    document.write(montant + " Taxe de 9 pour cent = " + taxe.toFixed(2) + "<br>");
}
*/

var montant;
for(var i=5;i<=100;i+=5){
    montant = i * 1.09;
    document.write("Montant = " + i + "$ avec taxes " + montant.toFixed(2) +"$<br>");
}
