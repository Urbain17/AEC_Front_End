/**Créé par Amentor le 2019-11-28...*/
//Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
// 100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
// 150 points de dommages si l’adversaire a entre 60 et 79 hp.
// 200 points de dommages si l’adversaire a entre 80 et 99 hp.
// 250 points si l’adversaire a 100 hp et plus.

var hp;
hp = Number(prompt("le point de vie : " + hp));
    if (hp < 60){
        document.write("100 points de dommages");
    }
    else{
        if (hp >= 60 && hp<= 70){
            document.write("150 points de dommages");
        }
        else {
            if (hp >= 80 && hp <= 99){
                document.write("200 points de dommages");
            }
            else{
                if (hp >= 100){
                    document.write("250 points de dommage");
                }
            }
        }
    }