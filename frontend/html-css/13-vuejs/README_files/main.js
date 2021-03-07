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

// Crée une nouvelle application Vue 
// dont le composant principal est l'objet myApp.
const myVueApp = Vue.createApp(myApp);

// Lie l'application Vue créée au container #myFirstApp.
myVueApp.mount('#myFirstApp');