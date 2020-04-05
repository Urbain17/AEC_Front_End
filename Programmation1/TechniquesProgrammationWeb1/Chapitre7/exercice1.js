//Créer une classe JoueurHockey
//nom
//nbButs
//nbPasses

class JoueurHockey  {
    constructor(nom, nbButs, nbPasses){

        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }
}
Total(){
    return(this.nbButs+ this.nbPasses);
}

let SydneyCrosy = new JoueurHockey("Sydney Crosy", 454, 787);
let MarioLemieux = new JoueurHockey("Mario Lemieux", 690, 1033);
let JaromirJagr = new  JoueurHockey("Jaromir Jagr", 766, 1155);


class Equipe{
    constructor(joueur1, joueur2, joueur3){
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }
}

