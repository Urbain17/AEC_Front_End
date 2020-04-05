/**Crée par Amentor Messanvi le 2019-12-05...*/
//Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :
//
// tranche à afficher	               age
//
// 		  enfant			         0  <=  age  <= 12
// 		  adolescent		         13  <=  age  <= 17
// 		  adulte			         18  <=  age  <= 54
// 		  senior			         55  et plus
//
// Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.


var tranche = "";
var age;
age = Number(prompt("Entrez votre âge : "));

if (age >= 0 && age <= 12){

    alert("La tranche d'âge est : enfant ");
}
else {
    if (age >=13 && age <= 17){

        alert("La tranche d'âge est : adolescent ");
    }
    else {
        if (age >= 18 && age <= 54){

            alert("La tranche d'âge est : adulte");
        }
        else {
            if(age >= 55){

                alert("La tranche d'âge est : senior ");
            }
        }
    }
}

