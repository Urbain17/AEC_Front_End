//Créez un tableau nommé tab2Exp avec 16 cases entières.
// À l’aide d’une boucle et de Math.pow, insérez les bonnes valeurs dans le tableau.
// exp : tab2Exp[0] = 1;    // 20
// ...
// exp : tab2Exp[4] = 16;  // 24
// exp : tab2Exp[5] = 32;  // 25

//var tab2Exp = ["1","2","3","4","5","6","7","8","9","9","10","11","12","13","14","15","16"];

/*var tab2Exp = ["","","","","","","","","","","","","","","",""];

for (var i=0; i<=16; i++ ){
    tab2Exp.push(Math.pow(2,i));
}
*/
var tabExp2 = [];

for(var i=0;i<=16;i++){
    tabExp2[i] = Math.pow(2,i);
    document.write("2 exposant " + i + " = " + tabExp2[i] + "<br>");
}
