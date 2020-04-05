///Par Amentor Messanvi, le 15 février 2020...
//
//
//Vous demandez au client le type de Jeep
// Sport 33290$
// Sport S 37240$
// Havane 39235$.
// Vous demandez ensuite le terme (24, 48, 60 ou 84) mois.
// Vous demandez la couleur, si c’est rouge ou vert, ajoutez 1399$ au prix du véhicule.
// Vous demandez si la transmission est manuelle (0$), automatique (1500$) ou automatique 8 vitesses (2400$).
//
// Calculez une taxe de 15%.
// Le taux d’intérêt est toujours 0%
// Affichez le paiement mensuel incluant la taxe et un résumé de la transaction.


var type= prompt("Le type de Jeep");
var terme=Number(prompt("Le terme entre les valeurs suivantes : 24, 48, 60 ou 84 mois"));
var couleur=prompt("La couleur");
var transmission= prompt("Choisissez une transmission entre les suivantes : manuelle, automatique ou automatique 8 vitesses");

var prixSport=3390;
var prixSportS=37240;
var prixHavane=39235;
var prixCouleur;
var prixTransmission;
var prixDeBase;


var prixHorsTaxe;

if (couleur==="rouge" || couleur==="vert"){
    prixCouleur = 1399;
}
else {
    prixCouleur = 0;
}
if (transmission ==="automatique"){
    prixTransmission = 1500;
}
else{
    if (transmission === "automatique 8 vitesse"){
        prixTransmission = 2400;
    }
    else {
        prixTransmission = 0;
    }
}
if (type === "Sport"){
    prixDeBase = prixSport;
}
else {
    if (type === "Sport S"){
        prixDeBase = prixSportS;
    }
    else {
        if (type === "Havane"){
            prixDeBase = prixHavane
        }
    }
}

prixHorsTaxe = prixDeBase + prixCouleur + prixTransmission;

document.write("Le prix de base de ce type de Jeep est " + prixDeBase + "$" + "<br>");
document.write("Le terme est : " + terme  +  "mois" + "<br>");
document.write("Le prix de cette transmission est : " + prixTransmission + "$" + "<br>");
document.write("Le prix de la couleur est : " + prixCouleur + "$" + "<br>");
document.write("Le prix total hors taxe est : " + prixHorsTaxe + "$" + "<br>");
document.write("Le prix total avec taxe est : " +  prixHorsTaxe*0.15+ "$" + "<br>");
document.write("Le paiement mensuel incluant la taxe est : " +  (prixHorsTaxe*0.15)/terme + "$");



