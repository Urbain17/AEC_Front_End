// Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne

var cpt=0;

for (var i=1; i<=49; i+=2){
    document.write(i + " ");
    cpt++;
    if (cpt===5){
        document.write("<br>");
        cpt=0;
    }
}