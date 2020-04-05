// Amentor Messanvi, le 19 février 2020...
//
//Nous allons programer un générateur de lettres aléatoires en utilisant les propriétés du unicode.
//L’encodage unicode est un système qui permet de représenter les caractères du clavier d’un ordinateur par des nombres.
//
//Nous nous intéressons particulièrement aux nombres 65 à 90 de l’encodage unicode car ils représentent les lettres A à Z en majuscules sur le clavier.
//
//C’est la fonction String.fromCharCode(nombre) qui permet de passer d’un nombre à du unicode.
//
//LE GÉNÉRATEUR DE LETTRES ALÉATOIRES
//Créez un tableau nommé tabNombres de 10000 cellules.
// Remplissez toutes les cellules de ce tableau de nombres aléatoires entre 65 et 90 inclusivement.
//
// Créez un second tableau nommé tabLettres de 10000 cellules.
// Vous devez remplir ce tableau à partir du tableau précédent en y inscrivant le caractère unicode correspondant au chiffre stocké dans le tableau tabNombres au même indice.

var tabNombres = [];
var nbFois=0;
for (var i= 0;i<10000;i++){
    tabNombres[i]=Math.ceil(Math.random() * (90- 65) + 65);
    /*console.log(tabNombres[i])*/
}
var tabLettres=[];
var voyelle = ["A", "E", "I", "O", "U", "Y"];
var nombreE=0;
var nombreVoyelle=0;

for (var i= 0;i<10000;i++){

    tabLettres[i]=String.fromCharCode(tabNombres[i]);
    console.log(tabLettres[i]);
    if (tabLettres[i]==="E"){
        nombreE++
    }
    if (voyelle.indexOf(tabLettres[i])!==-1){
        nombreVoyelle++
    }
    if (i+2<=10000)
    if (tabLettres[i]==="D"&& tabLettres[i+1]==="A"&& tabLettres[i+2]==="D"){
        console.log("Le mot DAD existe dans le tableau et commence à l'indice " + i);
        break
    }

}
console.log("Il y a " + nombreE + " lettres E");
console.log("Il y a " + nombreVoyelle + " voyelles");







