/** Crée par Amentor le 2019-11-14...*/

//On veut calculer et afficher une réduction que chaque acheteur a droit

var achat;

achat = Number (prompt ("Le total de vos achats est : " ));

if (achat>200){
   alert("Votre réduction est : " + achat*0.15);
}

else{
    alert("Vous n'avez aucune réduction");
}
