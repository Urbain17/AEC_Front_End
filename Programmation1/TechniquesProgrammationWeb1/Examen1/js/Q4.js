/**Crée le 2019-12-05 par Amentor Messanvi...*/
//Vous devez compléter un programme qui permet de calculer l’aire de formes.
// En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
// - "O" pour cercle : PI * rayon2
// - "R" pour rectangle : longueur * largeur
// - "T" pour triangle rectangle : (longueur * largeur) / 2
// - "C" pour carré : côté2
//
// L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules.
//
// En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire.
//
//
// Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.

var typeFigure = "";
var rayon;
var PI = 3.14;
var aire;
var longueur;
var largeur;
var cote;

typeFigure = String(prompt("Entrez une lettre entre O, R, T, et C"));

if (typeFigure.toUpperCase() ==="O"){
    rayon = Number(prompt("Quel est le rayon du cercle? "));
    alert("L'aire du cercle est " + (PI * rayon));
}
else {
    if (typeFigure.toUpperCase() ==="R"){
        longueur = Number(prompt("Quelle est la longueur du rectangle? "));
        largeur = Number(prompt("Quelle est la largeur du rectangle? "));
        aire = longueur * largeur;
    }
    else {
        if (typeFigure.toUpperCase() ==="T"){
            longueur = Number(prompt("Quelle est la longueur du triangle? "));
            largeur = Number(prompt("Quelle est la largeur du triangle? "));
            aire = (longueur * largeur)/2;
        }
        else {
            if (typeFigure.toUpperCase() ==="C"){
               cote = Number(prompt("Quel est le côté du carré? "));
               aire = cote * cote;
            }
        }
    }
}

document.write("L'aire est : " + aire);
