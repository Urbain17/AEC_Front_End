//Demandez un mot à l'usager, bouclez tant que le mot n'est pas patate.
// a. Comptez et affichez le nombre de mots entrés avant le mot patate.


var nbMots = -1;
var mot = "";

while (mot != "patate"){
    mot = prompt("Entrez un mot : ");
    nbMots++;
}
document.write("Vous avez entré " + nbMots + " mots AVANT patate");




