# VueJS

Utilisation de VueJS frontend (via la balise `<script>`).

# Qu'est ce que VueJS

Vue est un framework Javascript évolutif pour construire des interfaces utilisateur dynamiques.
Il est simple d'utilisation et permet d'appréhender le monde des frameworks JS.

Vue allie performances et simplicité et s’associe à d’autres technologies pour la conception d’applications web modernes.

Parmi les avantages de Vue on peut citer :
- Légereté
- Appréhendable (faible courbe d’apprentissage)
- Flexible
- Performant 
- Traçage automatique des dépendances d’un composant durant le rendu
- Syntaxe d’écriture simple
- Couvre toutes les fonctionnalités qu’on peut attendre d’un framework frontend

# Tutoriel d'introduction


Créer un projet avec un fichier `main.js` contenant un objet litéral vide :

```js
// main.js

const myApp = {

}
``` 

Créer un fichier `index.html` contenant une structure classique puis lier ce document au script `main.js` et au script VueJS logé à https://unpkg.com/vue@next (version de développement). Dans ce fichier `index.html`, ajouter une balise `main` possédant un attribut `id` ayant pour valeur `myFirstApp`.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My first VueJS App</title>
        <script src="https://unpkg.com/vue@next" defer></script>
        <script src="main.js" type="module"></script>
    </head>
    <body>
        <h1>My first VueJS App</h1>
        <main id="myFirstApp">
            <p>Hello World</p>
        </main>
    </body>
</html>
```

Une application Vue met en relation une interface utilisateur (ici `index.html`) et un composant Vue (ici l'objet `myApp` dans le fichier `main.js`). Un composant Vue contient des données, des méthodes, des évènements et bien plus encore. Un composant Vue peut lui même contenir d'autres composants Vue.

Dans le fichier `main.js`, créer l'application Vue et la lier à notre container HTML identifié `myFirstApp`.

```js
// main.js

// notre futur composant VueJS
const myApp = {

}

// Crée une nouvelle application Vue
// dont le composant principal est l'objet myApp.
// l'application est stockée dans la constante myVueApp
const myVueApp = Vue.createApp(myApp);

// "Monte" l'application VueJS et la relie au container #myFirstApp.
myVueApp.mount('#myFirstApp');
``` 

Pour le moment l'application est vide, à l'étape suivante, nous allons ajouter des données à notre application et les afficher sur l'interface utilisateur (UI).

> Dans notre exemple, nous avons utilisé la balise `<main>` comme container. Notez que VueJS interdit d'utiliser la balise `<body>` en tant que container.

Le container de notre application est : 

```html
<main id="myFirstApp">
    <p>Hello World</p>
</main>
```

Vous avez appris :
- à intégrer VueJS à une page web via la balise `<script>`
- à créer une application VueJS vide
- à relier un container HTML à une application VueJS

## Les variables 

Un composant Vue contient des données que l'on va pouvoir afficher dans notre interface utilisateur en utilisant une syntaxe simplifiée.

Le 1er élément que l'on retrouve dans un composant Vue est une méthode data() qui retourne un objet literal contenant des données. Ce sont les données de notre application.

Pour commencer, nous allons ajouter un prénom et un age.

Dans le fichier `main.js`, compléter l'objet `myApp` comme suit: 

```js
// main.js
const myApp = {
    data() {
        return {
            firstname: "Léon",
            age: 18,
        }
    }
}

const myVueApp = Vue.createApp(myApp);
myVueApp.mount('#myFirstApp');
```

Toutes les données retournées par cette méthode sont des attributs de notre composant VueJS et sont disponibles sous forme de variables  dans l'interface utilisateur (un attribut = une variable du meme nom). Libre à nous de les afficher où bon nous semble (à l'intérieur du container de l'application, bien sur).

Pour afficher la valeur d'une variable, on place son nom entre 2 double-accolades comme ceci: `{{ nomVariable }}`. Notez l'espace avant et après le nom de la variable.

Modifions le contenu de notre container pour afficher le prénom et l'âge défini dans notre application: 

```html
<main id="myFirstApp">
    <h2>Hello {{ firstname }}.</h2>
    <p>You are {{ age }} years old.</p>
</main>
```

Pour voir le résultat, lancer le document HTML dans un environnement serveur local (http://localhost/...). 

> VueJS ne fonctionnera pas si vous lancez le document HTML directement depuis votre explorateur de fichiers. Utilisez un serveur web local comme Wamp, Xampp, Laragon ou simplement le serveur de développement PHP.

Résultat :

![screen](README_files/screen_step1.png)

## Liaison de données

Lorsque nous affichons des variables dans l'interface utilisateur, la valeur affichée est celle présente dans notre application. Si la valeur de cette donnée change dans l'application, l'interface utilisateur est automatiquement mise à jour par VueJS.

Pour illustrer le concept et commencer à dynamiser notre application. Nous allons ajouter un bouton. A chaque clic sur ce bouton, un évènement sera déclenché et l'age sera incrémenté dans l'application.

```html
<main id="myFirstApp">
    <h2>Hello {{ firstname }}.</h2>
    <p>You are {{ age }} years old.</p>
    <button>get old</button>
</main>
```

### Introduction aux évènements avec VueJS

Vous connaissez `addEventlistener()` qui permet de lier un évènement à un élement du DOM HTML. 

Avec VueJs, nous allons utiliser des attributs HTML "spéciaux" qui vont relier nos élements HTML à des méthodes de notre application.

Pour ajouter des méthodes dans notre composant VueJs, complétons notre objet myApp: 

```js
// main.js
const myApp = {
    data() {
        return {
            firstname: "Léon",
            age: 18,
        }
    },

    methods: {
        onButtonClick() {
            this.age++;
        }
    }
}
```

Notre composant contient désormais un attribut `methods` qui est un objet litéral dans lequel nous pouvons ajouter les comportements de notre application. Nous avons ici ajouté une méthode `onButtonClick` qui incrémente la valeur de `age`.


> Pour accéder aux données définies dans `data()` à l'intérieur de notre composant VueJs, nous utilisons `this` (comme dans une classe). Ici `this.age` correspond à l'attribut `age` dans la méthode `data()`.


Pour relier cette méthode à un évènement "click" sur notre bouton, nous ajoutons une directive v-on qui ressemble à un attribut HTML avec un format particulier :

```html
<main id="myFirstApp">
    <h2>Hello {{ firstname }}.</h2>
    <p>You are {{ age }} years old.</p>
    <button v-on:click="onButtonClick">get old</button>
</main>
```

`v-on`: indique qu'on va lier l'élément à un évènement.

`v-on:click`: l'évènement se produira au click sur l'élément.

`v-on:click="onButtonClick"`: au click, la méthode onButtonClick sera exécutée.

> Le nom de la méthode indiquée doit être une méthode de notre composant VueJS.

Lancer votre document HTML et observez le résultat lorsque vous cliquez sur le bouton. 
1. La valeur de l'âge est modifiée dans l'application VueJS.
2. La variable associée dans l'interface utilisateur est automatiquement mise à jour.

Ce concept est `la liaison de données`.

Vous avez appris à:
- Ajouter des données dans un composant VueJS
- Afficher ces données dans l'interface utilisateur
- Lier un élément HTML à un évènement d'un composant VueJS
- Mettre à jour une page web dynamiquement en utilisant VueJS

## Suite à venir