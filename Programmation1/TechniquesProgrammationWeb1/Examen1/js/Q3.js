/**Crée le 2019-12-05 par Amentor Messanvi...*/
//Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.
//
// Le prix de base de la Pizza au fromage est de 10$.
//
// Si on veut des légumes, il faut ajouter 5$ au prix initial.
//
// Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
//
// Si on veut de la sauce, il faut ajouter 1$ par personnes.
//
// Le TPS s’élève à 5% du prix sans les taxes.
//
// Le TVQ s’élève à 9,975% du prix sans les taxes.
//
//
// Produisez une facture qui résume l’achat, le prix avant et après les taxes.

var prixpizza = 10;
var aveclegumes = true;
var prixlegumes = 5;
var avecpepperroni = true;
var prixpepperroni = 8;
var nbrepersonne = 1;
var prixsauce = 1;
var avecsauce = true;
var tps = 5/100;
var tvq = 9.975/100;

var prixavantaxe;
var prixaprestaxe;

prixavantaxe = prixpizza;
prixpizza = Number (prompt("Quel est le prix du pizza de base?"));
prixlegumes = Number(prompt("Quel est le prix des légumes?"));
prixpepperroni = Number(prompt("Quel est le prix du pepperoni"));
prixsauce = Number (prompt("Quel est le prix de la sauce pour une personne?"));


if (aveclegumes){
    prixavantaxe = prixpizza + prixlegumes;
}

else if (avecpepperroni){
    prixavantaxe = prixpizza + prixlegumes + prixpepperroni;
}
else if (avecsauce){
    prixavantaxe = prixpizza + prixlegumes + prixpepperroni + prixsauce;
}

document.write("prix avant taxe : " + prixavantaxe);

prixaprestaxe = prixavantaxe + prixavantaxe * (tps + tvq);

document.write("prix après taxe : " + prixaprestaxe);