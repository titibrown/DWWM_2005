import { Order, OrderState } from "./models/Order.js";
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
                this.checkOrders();
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
            let orderToAccept =this.orders.find(order => order.id == event.target.dataset.order);
            orderToAccept.state=OrderState.ACCEPTED;
            orderToAccept.timeLeft = 90;
            /* event.target.dataset.state = OrderState.ACCEPTED;
            */
            
        },

        refuseOrder: function (event){
            let orderToAccept =this.orders.find(order => order.id == event.target.dataset.order);
            orderToAccept.state=OrderState.CANCELLED;
            orderToAccept.timeLeft = 0;
        },

        generateOrder: function (){
            if (Math.floor(Math.random()*(4-1)+1)!==3){
                this.orders[orders.findIndex(orders => order.state!==3 || order.state!==1)] 
            }
        },

        checkOrders: function (){
            this.orders.forEach( order =>{
                
                if(--order.timeLeft<1){
                    
                    order.state= OrderState.CANCELLED ;
                } 
            })

            this.orders.forEach(order => {

                switch (order.state){
                    case OrderState.EMPTY:
                    case OrderState.DONE:
                    case OrderState.CANCELLED:
                        if(Math.random()<0.6){
                            order.changeOrder(this.bakery.level)
                        }
                        return;
                    
                        
                    
                    case OrderState.PENDING:

                    case OrderState.ACCEPTED:
                        default:
                            break;
                   
                }
            });
        }

        



        

    }
}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
