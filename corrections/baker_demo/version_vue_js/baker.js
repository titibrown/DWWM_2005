import { BakeryLogger, Bakery, Shop } from "./assets/Models.js";

const appBaker = {
    data() {
        return {
            logger: BakeryLogger.getLogger(),
            shop: new Shop(),
            bakery: new Bakery(),
            running: true
        }
    },

    mounted() {

        this.shop.setBakery(this.bakery);

        setInterval(() => {
            if(this.shop.bakery.golds > 0) {
                if(this.running && this.shop.running) {
                    this.shop.update();
                }
            }
            else {
                if(this.running) {
                    alert('Vous avez fait faillite !');
                    this.running = false;
                    this.shop.running = false;
                }
            }
            
        }, 1000);
    },
    
    computed: {
        
        startStop() {
            return this.shop.running ? "Fermer" : "Ouvrir";
        },

        golds() {
            return this.bakery.golds.toFixed(1);
        },

        totalgoldsEarned() {
            return this.bakery.total.goldsEarned.toFixed(2);
        },

        totalgoldsSpent() {
            return this.bakery.total.goldsSpent.toFixed(2);
        },
    },

    methods: {
        toggleBakery() {
            this.shop.running = !this.shop.running;
        },

        levelUp() {
            this.bakery.levelUp();
        },

        buyMill() {
            this.bakery.buyMill();
        }, 

        acceptOrder(event) {
            this.shop.acceptOrder(event.target.dataset.oid);
        }, 

        cancelOrder(event) {
            this.shop.cancelOrder(event.target.dataset.oid);
        },

        runningOrderBaguettes(id) {
            return this.shop.runningOrderBaguettes(id);
        }
    }
}

Vue.createApp(appBaker).mount('#app');