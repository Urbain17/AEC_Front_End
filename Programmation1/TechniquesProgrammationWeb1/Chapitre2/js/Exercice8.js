/**Amentor...*/
/**2019-11-23*/
//Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé.
// Affichez son salaire. (Attention, il est payé le double de son taux horaire pour toutes
// les heures supplémentaires travaillées. Une semaine de travail normale est de 40 heures.


var NbHeuresTravailles;
var TxHoraire;
var salaire;

NbHeuresTravailles = Number (prompt("Veuillez entrer le nombre d'heures travaillés : "));

TxHoraire = Number (prompt( "Le taux horaire de l'employé est : " ));

salaire = Number ( NbHeuresTravailles * TxHoraire);

if (NbHeuresTravailles <= 40){
    alert("Le salaire est : " + salaire);
}
else {
    alert("Le salaire est : " + (salaire + (NbHeuresTravailles * TxHoraire *2)));
}