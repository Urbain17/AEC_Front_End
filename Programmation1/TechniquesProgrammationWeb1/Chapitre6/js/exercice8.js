// Lire les noms et notes d’examen d’une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

var tabNoms = [];
var tabNotes = [];

var moyenneNote;

for (var i=0;i<5;i++){
    tabNoms[i] = prompt("Quel est votre nom ?");
    tabNotes[i] = Number(prompt("Quel est votre note? "));
}

moyenneNote = (tabNotes[0] + tabNotes[1] + tabNotes[2] + tabNotes[3] + tabNotes[4])/5

for (var i=0;i<5;i++){
    if (tabNotes[i]>moyenneNote){
        document.write(tabNoms[i] + tabNotes[i]);
    }

}



