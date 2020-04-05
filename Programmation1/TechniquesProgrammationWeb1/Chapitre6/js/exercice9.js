// Lire 10 nombres quelconques et les placer dans un tableau. Par la suite,
// trouver le plus petit et le plus grand de ces nombres.

var tableau = [];
var max = 0;
var min = 9999999;

for(var i = 0;i<10;i++){
    tableau[i] = Math.floor(Math.random() * 100);
}

//On passe tous les éléments du tableau pour trouver le min et max.
for(var j = 0;j<10;j++){
    if(tableau[j] < min){
        min = tableau[j];
    }

    if(tableau[j] > max){
        max = tableau[j];
    }
}

document.write("Le minimum est " + min + "<br>");
document.write("Le maximum est " + max);