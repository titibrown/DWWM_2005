/*
if(windows.fetch) {
    fetch();
}
else {
    var xhr = new XMLHttpRequest();
}
*/

/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://devoldere.net/api/cars');

xhr.addEventListener('load', () => {
    //console.log(xhr.response);
    let myJson = JSON.parse(xhr.response);
    console.log(myJson.result);
    console.log(myJson);
});

xhr.send();
*/

// le container qu'on va remplir avec des données ;)
var log = document.getElementById('log');

/**
 * lit un tabelau contenant des objets "cars"
 * le tableau provient du JSON récupéré par fetch() (plus bas)
 * @param array data les données des voitures
 */
function readCars(data)
{
    let carList = document.createElement('ol'); // 

    for (let i=0; i < data.length; i++) {

        let myCar = data[i];
        let aCar = document.createElement('li');
        aCar.innerHTML = myCar.car_name;
        carList.append(aCar);

    }

    log.append(carList);
}

// promesses : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
// fetch API : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
// appel asynchrone : fetch
// quant la réponse est réceptionné par fetch
// le then suivant est exécuté.
// lorsqu'un then a terminé sa tâche
// le then suivant est exécuté
// etc ...
fetch('https://devoldere.net/api/cars')
.then((response) => {
    console.log();
    return response.json(); // conversion du json récpetionné en objet JS
})
.then((json) => {
    readCars(json.data); // appel de la fonction readCars avec les données des cars en parametre
})
.catch((error) => {
    // next...
});


