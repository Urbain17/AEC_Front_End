//Le collège offre 6 options aux étudiants. Ces options sont :
// INFORMATIQUE
// ADMINISTRATION
// HISTOIRE
// GÉNIE
// GEOGRAPHIE
// BUREAUTIQUE
//
// Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
// Vous lui répondez si OUI ou NON le collège offre cette option.


var options = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GÉNIE", "GÉOGRAPHIE", "BUREAUTIQUE"];

var choix = prompt("Entrez une option pour valider si le cours est offert : ").toUpperCase();

var trouver = false;

for (var i=0;i<options.length;i++){

if (choix===options[i]){
    trouver = true;
}
}

if (trouver){
    document.write("OUI");
    //console.log("OUI");
}
else {
    document.write("NON");
    //console.log("NON");
}