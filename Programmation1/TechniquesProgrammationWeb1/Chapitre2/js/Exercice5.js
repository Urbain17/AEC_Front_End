/**Amentor */
// Lire un degré de température. Si la température est comprise entre -40 et -10
// écrire « HAAAAAAAAA! Il fait froid»
// . Sinon, écrire « Enfin une belle journée! ».

var temperature;

temperature = Number (prompt("Entrez une température : "));

if (temperature >= -40 && temperature <= -10 ){
    document.write("HAAAAAAAA! Il fait froid");
}
else{
    if (temperature< -40){
        document.write("C'est pas humaim!");
    }
    else {
        document.write("Enfin une belle journée");
    }
}