import { Order } from "./models/Order.js";
import { Bakery } from "./models/Bakery.js";

const myBaker = {

    data() {
        return {
            bakery: new Bakery(),
            orders: [],
            idTimer: 0,
            running: true

        }

    },

    beforeMount() {

        let i;

        for(i = 0; i < 10 ;i++) 
        {
            let o = new Order();
            o.id = i;
            this.orders.push(o);
        }



    },

    mounted()  {
        setInterval(() => {
            if(this.running && this.bakery.running)  {
                if (!this.bakery.update()) {
                    this.running = false;
                    if(confirm("Vous avez perdu \nSouhaitez-vous recommencer ?")){
                        document.location.reload();
                    }
                    else{
                        document.location.href = "//www.google.com";
                    }
                    
                }
            }

        }, 1000);
    },

    methods: {
        startStop: function () {
            this.bakery.running = !this.bakery.running;
        },

        levelUp: function () {
            if (!this.bakery.levelUp()) {
                prompt('Pas assez d\'or');
            }
        },

        buyMill: function () {
            if (!this.bakery.buyMill()) {
                prompt('Pas assez d\'or');
            }
        }
    }
}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
