// Le premier jour de l'ouverture de votre compte, vous déposez .01. À chaque jour pendant 10 jours; vous déposez
// le double de la veille. Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre
// compte.

var depot = .01;
var solde =0;
for(var i=1; i<=10; i++){
    solde = solde + depot;
    depot = depot*2;
    document.write("jour " + i + " dépot de " + depot + " solde de : " + solde.toFixed(2) +"<br>");
}


/*var solde = 0;
var depot = 0.01;

for(var i=1;i<=10;i++){
    solde += depot;
    document.write("Jour "  + i + " depot de " + depot + "$ solde de : " + solde.toFixed(2) +"$<br>");
    depot = depot * 2;
}
*/

