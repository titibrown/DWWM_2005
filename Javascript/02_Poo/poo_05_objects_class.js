/**
 * JAVASCRIPT : Introduction à la syntaxe Objet: l'approche pas classes
 * Prérequis: les bases, les fonctions, les références
 * 
 * En Javascript, tout est objet.
 * Il est possible (et recommandé) de créer des objets adaptés au contexte de l'application à développer
 * 
 * Un objet peut être nommé
 * Un objet peut contenir des attributs qui définissent son ÉTAT : un nom, un prénom, une couleur, une distance...
 * Un objet peut contenir des méthodes qui définissent ses COMPORTEMENTS : marcher(), courir(), changerCouleur()... 
 * 
 * Ce document utilise la syntaxe des classes. 
 * Notez que les classes n'existent pas en tant que tel en JS qui est un langage orienté "prototype".
 * L'approche par "classes" est un "sucre syntaxique" et permet de mieux comprendre le concept.
 * Le prototypage est abordé dans les scripts suivants.
 */


// Reprenons la syntaxe du script précédent (volontairement simplifié)
let formateur = { nom: "DEVOLDÈRE", prenom: "Mickaël" } // création d'un objet anonyme avec 2 attributs (nom et prenom)
console.log(formateur);

// TODO