/**Créé par Amentor messanvi le 2019-12-05...*/
//Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
// Aucun rabais pour moins de 10 personnes.
// 10 personnes et plus, 5% de rabais.
// 20 personnes et plus, 10% de rabais.
// 30 personnes et plus, 15% de rabais.
// 40 personnes et plus, 20% de rabais.
//
// Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin.

var nbreDepersonne;
nbreDepersonne = Number (prompt("Quel est le nombre de personne s'il vous plait"));

if (nbreDepersonne < 10){
    document.write("le montant de l'inscription est " + 50 + "$"+ "personne" );
}

else {
    if (nbreDepersonne >= 10 && nbreDepersonne < 20){
    document.write("le montant de l'inscription est " + nbreDepersonne*50*0.05);
    }
    else{
        if(nbreDepersonne >= 20 && nbreDepersonne <30){
            document.write("le montant de l'inscription est " + nbreDepersonne*50*0.1);
        }
        else{
            if (nbreDepersonne >=30 && nbreDepersonne <40){
                document.write("le montant de l'inscription est " + nbreDepersonne*50*0.15);
            }
            else {
                if(nbreDepersonne>=40){
                    document.write("le montant de l'inscription est " + nbreDepersonne*50*0.2);
                }
            }
        }
    }
}