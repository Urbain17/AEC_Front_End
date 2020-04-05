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