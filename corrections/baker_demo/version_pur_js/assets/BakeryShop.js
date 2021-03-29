import BakeryMath from "./BakeryMath.js"; 
import Bakery from "./Bakery.js"; 
import BakeryOrder from "./BakeryOrder.js"; 

export default class BakeryShop 
{
    constructor()
    {
        /** @var Bakery bakery */
        this.bakery = new Bakery();
        this.orders = [];
        this.acceptedOrders = [];
    }

    update() 
    {
        this.bakery.update();

        this.orders.forEach((o) => {

            if(o.state < BakeryOrder.COMPLETED && BakeryMath.getTimeLeft(o.expire) < 1) {
                this.cancelOrder(o);
            }             
        });

        if(this.getAcceptedOrders().length > 0) {
            this.acceptedOrders[0].complete(this.bakery);
        }
        
        this.orders = this.orders.filter(o => o.state > BakeryOrder.CANCELLED);
        
        if(this.getPendingOrders().length < 10 && BakeryMath.getRandomInt(1, 100) > 60) {
            this.orders.push(new BakeryOrder(this.bakery.level));
        }
    }

    cancelOrder(id)
    {
        let o = this.getOrder(parseInt(id));
        if(o !== undefined) {
            o.cancel();
        }
    }

    acceptOrder(id)
    {
        let o = this.getOrder(parseInt(id));
        if(o !== undefined) {
            o.accept();
        }
    }

    getOrder(id)
    {
        return this.orders.find(o => o.id === parseInt(id));
    }

    getPendingOrders()
    {
        return this.orders.filter(o => o.state === BakeryOrder.PENDING);
    }
    
    getAcceptedOrders()
    {
        this.acceptedOrders =  this.orders.filter(o => o.state === BakeryOrder.ACCEPTED).sort((a, b) => a.getTimeLeft() - b.getTimeLeft());
        return this.acceptedOrders;
    }

    getCompletedOrders()
    {
        return this.orders.filter(o => o.state === BakeryOrder.COMPLETED).sort((a, b) => a.expire - b.expire).reverse();
    }
}