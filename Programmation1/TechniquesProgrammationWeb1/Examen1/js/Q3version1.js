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

var prixPizza = 10;
var prixLegumes = 5;
var pizzaAvecLegumes = true;
var prixPepperoni = 8;
var pizzaPepperoni = true
var nombreDePersonne = 1;
var prixSauce =  1;
var tps = 5/100;
var tvq = 9.975/100;

var prixAvantTaxe = prixPizza + prixLegumes + prixPepperoni + prixSauce*nombreDePersonne;
var prixApresTaxe = prixAvantTaxe + prixAvantTaxe * (tps + tvq);


prixPizza = prompt("Prix pizza de base");
prixLegumes = prompt("Prix pizza avec légumes");
prixPepperoni = prompt("Prix pizza pepperoni");




if (pizzaAvecLegumes === true){
    prixAvantTaxe = prixAvantTaxe + prixLegumes;
}
else if (pizzaPepperoni === true){
        prixAvantTaxe =  prixPizza + prixLegumes + prixPepperoni;
    }

document.write("prix avant taxe : " + prixAvantTaxe);
//prixAvantTaxe = prixAvantTaxe + prixSauce*nbreDepersonne;
document.write("prix après taxe : " + prixApresTaxe);


