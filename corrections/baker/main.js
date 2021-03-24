import { Bakery }from "./models/bakery.js"; 

const myBaker = {

    data() {
        return {
            bakery: new Bakery(),
            idTimer: 0,
            running: true
        }
        
    },

    methods: {
        startStop: function() {
            this.bakery.running = !this.bakery.running;

            if(this.bakery.running) {
                this.idTimer = setInterval(() =>  {
                    this.bakery.update();
                    if(!this.bakery.update()){
                        clearInterval(this.idTimer);
                        alert('Game Over!');
                    }
                }, 1000);
            }
        },

        levelUp: function() {
            if(!this.bakery.levelUp()) {
                prompt('Pas assez d\'or');
            }
        },

        buyMill: function() {
            if(!this.bakery.buyMill()) {
                prompt('Pas assez d\'or');
            }
        }
    }
}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
