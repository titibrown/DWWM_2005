// fonction synchrone
const salut = () => {
    console.log('salut');
}

// fonction asynchrone
const hello = async () => {
    console.log('hello');
}

/**
 * getApiData : lis le contenu json à partir de slowapi.php
 * slowapi.php mettra 5 secondes à répondre.
 * Le mot clé async définit la méthode "asynchrone".
 * Lorsque cette fonction sera appelée, elle sera exécutée dans un processus parallèle non bloquant
 * Le mot clé await met en pause l'exécution de la fonction le temps de terminer le traitement associé
 */
const getApiData = async () => {
    try {
        var response = await fetch('slowapi.php'); // await met la fonction en pause et attend la réponse de fetch() avant d'xécuter la suite de la fonction
        var json = await response.json(); // pause et attente du résultat de response.json() 
        console.log('Microtâche getApiData.fetch() terminé');
        console.log(json); // affichage du résultat dans la console
        console.log('Macrotâche getApiData() terminé');
    } catch(err) {
        console.log(err);
    }
}

// exécution de getApiData()
// la fonction est asynchrone, son exécution est placée dans la file des macrotâches.
getApiData();



/** 
 * @see /html-css/06-ajax/
 * fetch est placé dans la file des microtâches
*/
fetch('api.json')
.then((response) => {
    return response.json();
})
.then((json) => {
    console.log('Microtâche fetch() terminé')
    console.log(json);
})
.catch((err) => {
    console.error(err);
});


// setTimeout est asynchrone et placé dans la file des macrotâches 
// dès qu'une macrotâche est terminée, sa fonction de rappel est exécutée (ci-dessous, les console.log())
setTimeout(() => console.log('Macrotâche setTimeout 2000: HAHA'), 2000);
setTimeout(() => console.log('Macrotâche setTimeout 0: HOHO'), 0);



// instruction synchrone, sera exécutée en 1er !
console.log('console.log synchrone: HIHI');

// fonction asynchrone: placé dans la file des macrotâches
hello();

// fonction synchrone: exécutée directement
salut();