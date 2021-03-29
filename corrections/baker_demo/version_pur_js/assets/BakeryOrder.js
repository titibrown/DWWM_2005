import BakeryMath from "./BakeryMath.js"; 

export default class BakeryOrder 
{
    static CANCELLED = 0;
    static PENDING = 1;
    static ACCEPTED = 2;
    static COMPLETED = 3;

    static nbOrders = 0;

    constructor(_level)
    {
        this.id = ++BakeryOrder.nbOrders;
        this.baguettes = BakeryMath.getRandomInt(1, 60 * _level);
        this.price = BakeryMath.getRandomFloat(0.5, 1 * _level);
        this.totalPrice = BakeryMath.getRoundedFloat(this.price * this.baguettes);
        this.expire = BakeryMath.getExpireTime(BakeryMath.getRandomInt(50, 60));
        this.state = BakeryOrder.PENDING;

        setInterval(() => {
            if(this.state !== BakeryOrder.COMPLETED && BakeryMath.getTimeLeft(this.expire) < 1) {
                this.state = BakeryOrder.CANCELLED;
            }
        }, 2000);
    }

    getTimeLeft()
    {
        return BakeryMath.getTimeLeft(this.expire);
    }

    cancel()
    {
        this.state = BakeryOrder.CANCELLED;
    }

    accept()
    {
        this.expire = BakeryMath.getExpireTime(60);
        this.state = BakeryOrder.ACCEPTED;
    }

    complete(bakery)
    {
        if(this.state === BakeryOrder.ACCEPTED) {
            if(bakery.deliver(this.baguettes, this.totalPrice)) {
                this.state = BakeryOrder.COMPLETED;
                //alert('Commande ' + this.id + ' livrée. Gain: ' + this.totalPrice + ' Or.');
            }
        }
    }

}