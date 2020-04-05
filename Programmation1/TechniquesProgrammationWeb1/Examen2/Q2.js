//Par Amentor Messanvi le 15 février 2020...
//
//À l’aide de 2 for imbriqués et des variables nbLignes, nbColonnes et nb, reproduisez le résultat suivant :

var nb =1000;
var nbLignes = 10;
var nbColonnes = 20;

for (var i =0;i<nbLignes;i++){
    for (var j=0;j<nbColonnes;j++){
        document.write(nb+ " ");
        nb-=5 ;
    }
    document.write("<br>");
}

