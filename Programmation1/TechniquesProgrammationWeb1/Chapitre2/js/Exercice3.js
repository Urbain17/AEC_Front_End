/**Créé par Amentor le 2019-11-15....**/
// On veut lire deux nombres et écrire bonsoir si les 2 sont plus grands 9 sinon écrire bonsoir

var nb1;
var nb2;

nb1 = Number (prompt("Entrez le nombre 1 : "));
nb2 = Number (prompt("Entrez le nombre 2"));

if (nb1 > 9 || nb2 > 9){
    alert("BONJOUR");
}
else {
    alert("BONSOIR")
}