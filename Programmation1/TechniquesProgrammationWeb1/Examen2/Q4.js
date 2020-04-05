//Amentor Messanvi le 18 février 2020
//L’AGENCE DE VOYAGES
//
// Créez une classe Activité
// Une activité a un nom
// Une activité a un coût
//
// Créez une classe Voyage
// Un voyage a une destination
// Un voyage a prix pour billet avion
// Un voyage un tableau d’activités
//
// Créez une classe Personne
// Une personne a un nom
// Une personne a un voyage
//
// Instanciez l’activité “Golden Knights hockey” 125$
// Instanciez l’activité “Raiders football” 200$
// Instanciez l’activité “Tournoi de poker” 500$
//
// Instanciez le voyage “Las Vegas” 400$ avec les 3 activités précédentes
//
// Instanciez la personne “Shany Carle” avec le voyage précédent
//
// Faites afficher toutes ces informations à l’écran. Vous devez en plus afficher le coût total pour le voyage
// (le billet d’avion et les activités).

class Activite {
    constructor(nom, cout){
        this.nom = nom;
        this.cout = cout;
    }
}

class Voyage {
    constructor(destination, billetAvion, tableauActivite){
        this.destination = destination;
        this.billetAvion = billetAvion;
        this.tableauActivite = tableauActivite;
    }
}

class Personne{
    constructor(prenomNom, voyage){
        this.prenomNom = prenomNom;
        this.voyage = voyage;
    }
}

let activite1 = new Activite("Golden Knights hockey", 125);
let activite2 = new Activite("Raiders football", 200);
let activite3 = new Activite("Tournoi de poker", 500);

var coutTotal=0;
var coutActivite=0;
var liste = [activite1, activite2, activite3];

let  voyage1 = new Voyage("Las Vegas",400 , liste);

let ShanyCarle = new Personne("Shany Carle", voyage1);

console.log(ShanyCarle.prenomNom);
console.log(ShanyCarle.voyage.destination);
console.log(ShanyCarle.voyage.billetAvion);

for (var i=0;i<ShanyCarle.voyage.tableauActivite.length; i++ ){
    console.log(ShanyCarle.voyage.tableauActivite[i].nom);
    console.log(ShanyCarle.voyage.tableauActivite[i].cout);
    coutActivite=coutActivite + ShanyCarle.voyage.tableauActivite[i].cout

}

coutTotal = coutActivite + ShanyCarle.voyage.billetAvion;

console.log("le coût total du voyage est : " + coutTotal);






