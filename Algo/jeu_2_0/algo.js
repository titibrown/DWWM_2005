let choix_joueur; // undefined
let choix_ia = 0;
let score_joueur = 0;
let score_ia = 0;

do
{
    choix_ia = Math.round(Math.random() * 2); 

    choix_joueur = parseInt("SAISIE UTILISATEUR");

    if(choix_joueur < 0) {
        console.log("Le joueur souhaite arrêter");
    }
    else {
        if((choix_ia - choix_joueur) === 2 ) {
            score_ia += 1;
        }
        else if((choix_joueur - choix_ia) === 2) {
            score_joueur +=1;
        }
        else if((choix_ia - choix_joueur) === 1) {
            score_joueur += 1;
        }
        else if((choix_joueur - choix_ia) === 1) {
            score_ia +=1;
        }
        else {
            console.log("Aucun point attribué");
        }
    }

}
while(score_ia < 10 && score_joueur < 10 && choix_joueur >= 0);

