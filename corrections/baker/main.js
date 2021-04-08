import { Order, OrderState } from "./models/Order.js";
import { Bakery } from "./models/Bakery.js";
import { Logger } from "./models/Logger.js";

const myBaker = {

    data() {
        return {
            bakery: new Bakery(),
            orders: [],
            idTimer: 0,
            running: true,
            idCount: 0,
            currentOrder: null ,
            logger: Logger.getLogger(),

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
                this.deliverOrder();
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
                alert('Pas assez d\'or');
            }
        },

        buyMill: function () {
            if (!this.bakery.buyMill()) {
                alert('Pas assez d\'or');
            }
        },

        acceptOrder: function (event){
            let orderToAccept =this.orders.find(order => order.id == event.target.dataset.order);
            orderToAccept.state=OrderState.ACCEPTED;
            Logger.getLogger().addLog("La commande "+orderToAccept+" a été accepté");
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
            
            for( let order of this.orders){

                switch (order.state){
                    case OrderState.EMPTY:
                    case OrderState.DONE:
                    case OrderState.CANCELLED:
                        if(Math.random()<0.6){
                            order.changeOrder(this.bakery.level)
                        }
                        return ;    
                    case OrderState.PENDING:
                    case OrderState.ACCEPTED:
                        default:
                            break;      
                }        
            };
        },

        getAcceptedOrder: function(){

            let o = this.orders.filter(order => order.state== OrderState.ACCEPTED);
            o = o.sort((a,b) => a.timeLeft - b.timeLeft );
            this.currentOrder = o[0];
            return o;
        },

        deliverOrder: function(){

            let o = this.getAcceptedOrder();
            if(o.length>0){
                /** @var Order o */
                o = o[0];
                if( this.bakery.baguettes >= o.baguettes ){
                    o.state = OrderState.DONE;
                    this.bakery.sendBaguettes(o.baguettes);
                    Logger.getLogger().addLog("La boulangerie a livré "+o.baguettes+" baguettes");
                    this.bakery.earnGold(o.totalPrice);

                }
            }
        },





        



        

    }
}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
