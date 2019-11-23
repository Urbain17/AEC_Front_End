/**Amentor...*/
/**2019-11-13*/
// Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nombre;

nombre = Number (prompt("Veuillez entrer un nombre s'il vous plaît : "));

if (nombre < 0) {
    alert("Ce nombre est négatif");
}
else {
    if (nombre > 0){
        alert("Ce nombre est positif");
    }
    else {
        alert("Zéro");
    }
}