/**Créé par Amentor le 2019-11-15....**/
//on veut lire deux nombres,
// diviser le nombre 1 par le nombre 2 si le nombre 2 est différent de zéro.
// Si le nombre 2 est égal à zéro écrire le message "Division par zéro interdite".
// Si le nombre 2 n'est pas zéro, imprimer le résultat

var nb1, nb2;

nb1 = Number (prompt("Entrez le nombre 1 : "));
nb2 = Number (prompt("Entrez le nombre 2"));

if (nb2 !== 0){
    nb1/nb2;
}
else{
    if (nb2 === 0){
        alert("Division par zéro interdite");
    }
     else {
        document.write ("Le résultat du nombre 1 divisé par le nombre 2 est : " + nb1/nb2);
        }
    }

