import { Order } from "./models/Order.js";
import { Bakery } from "./models/Bakery.js";

const myBaker = {

    data() {
        return {
            bakery: new Bakery(),
            orders: [],
            idTimer: 0,
            running: true,
            idCount: 0,

        }

    },

    beforeMount() {

        let i;

        for(i = 0; i < 10 ;i++) 
        {
            let o = new Order();   
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
        },

        acceptOrder: function (event){
            event.target.dataset.state = 3;
            event.target.dataset.timeLeft = 90;
        },

        refuseOrder: function (event){
            event.target.dataset.state = 2;
        },

        generateOrder: function (){
            if (Math.floor(Math.random()*(4-1)+1)!==3){
                orders[orders.findIndex(orders => order.state!==3 || order.state!==1)] 
            }
        }


        

    }
}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
