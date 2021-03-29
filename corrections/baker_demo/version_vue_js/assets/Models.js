class BakeryLogger 
{
    static logger = null;

    static getLogger()
    {
        if(BakeryLogger.logger === null) {
            BakeryLogger.logger = new BakeryLogger();
        }
        
        return BakeryLogger.logger;
    }

    static addMsg(_msg)
    {
        BakeryLogger.getLogger().add(_msg)
    }

    constructor() 
    {
        this.log = [];
    }

    add(_msg) {
        this.log.unshift(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }) + ': ' + _msg);
    }
}

class BakeryMath
{
    static getRandomInt(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static getRandomFloat(min, max) 
    {
        return BakeryMath.getRandomInt(min, max) / 100;
    }

    static getRoundedFloat(val)
    {
        return Math.round(val * 100) / 100;
    }

    static getCurrentTime()
    {
        return new Date().getTime();
    }

    /*static getExpireTime(val)
    {
        return val * 1000 + new Date().getTime();
    }

    static getTimeLeft(val)
    {
        let timeleft = (val  - new Date().getTime()) / 1000;
        return (timeleft > 0) ? parseInt(timeleft) : 0;
    }*/
}


class Bakery 
{
    constructor()
    {
        this.level = 1; // bakery level
        this.levelPrice = 100;
        this.mills = 1; // mills purshased
        this.millPrice = 80;
        this.flour = 500; // flour produced
        this.baguettes = 0; // bagiettes produced
        this.golds = 50; // current golds

        this.total = {
            baguettes: 0,
            flour: 0,
            goldsEarned: 0,
            goldsSpent: 0
        }
    }

    earn(amount)
    {
        this.golds += amount;
        this.total.goldsEarned += amount;
    }

    pay(amount)
    {
        this.golds -= amount;
        this.total.goldsSpent += amount;
    }

    payConfirm(amount)
    {
        if(this.golds < amount) {
            alert('Pas assez d\'or ('+ parseInt(amount - this.golds) +' manquants)');
            return false;
        }

        this.pay(amount);
        BakeryLogger.addMsg('La boulangerie a dépensé ' + amount + '.');
        return true;
    }

    levelUp() {
        if(this.payConfirm(this.levelPrice)) {
            this.level++;
            this.levelPrice = parseInt(this.levelPrice * 1.5);
            BakeryLogger.addMsg('La boulangerie a atteint le niveau ' + this.level + '.');
            return true;
        } 
        return false;
    }

    buyMill()
    {   
        if (this.level*2 < this.mills) {
            alert('Augmentez le niveau de la boulangerie pour acheter plus de moulins');
            return false;
        }

        if(this.payConfirm(this.millPrice)) {
            this.mills++;
            this.millPrice = parseInt(this.millPrice * 1.5);
            BakeryLogger.addMsg('La boulangerie dispose désormais de ' + this.mills + ' moulins.');
            return true;
        } 
        
        return false;
    }

    update() 
    {
        this.pay(0.05 * this.mills * this.level);
        this.flour += this.mills;
        this.total.flour += this.mills;

        if(this.flour > this.level + 1) {
            this.flour -= this.level + 1;
            this.baguettes += this.level;
            this.total.baguettes += this.level;
        }
    }

    deliver(order)
    {
        if(this.baguettes >= order.baguettes) {
            this.baguettes -= order.baguettes;
            this.earn(order.totalPrice);
            BakeryLogger.addMsg('La boulangerie a livré ' + order.baguettes + ' baguettes');
            BakeryLogger.addMsg('La boulangerie a gagné ' + order.totalPrice + ' Or');
            return true;
        }
        return false;
    }
}

class Order 
{
    static CANCELLED = -1;
    static EMPTY = 0;
    static PENDING = 1;
    static ACCEPTED = 2;
    static COMPLETED = 3;

    static totalOrders = 0;

    constructor()
    {
        this.id = 0;
        this.baguettes = 0;
        this.price = 0;
        this.totalPrice = 0;
        this.accepted = 0;
        this.timeleft = 0;
        this.state = Order.EMPTY;
    }

    generate(_level)
    {
        this.state = (BakeryMath.getRandomInt(1, 100) > 50) ? Order.PENDING : Order.EMPTY;

        if(this.state === Order.PENDING) {
            this.id = ++Order.totalOrders;
            this.baguettes = BakeryMath.getRandomInt(5, 30 * _level);
            this.price = BakeryMath.getRandomFloat(_level, 30 * _level);
            this.totalPrice = BakeryMath.getRoundedFloat(this.price * this.baguettes);
            this.timeleft = BakeryMath.getRandomInt(10, 20);
        }
    }

    update(_level)
    {
        switch(this.state)
        {
            case Order.PENDING:
            case Order.ACCEPTED:
                if(this.timeleft < 1) {
                    this.cancel();
                } else {
                    this.timeleft--;
                }
                break;
            default:
                this.generate(_level);
                break;
        }
    }

    cancel()
    {
        this.timeleft = 0;
        this.state = Order.CANCELLED;
        //BakeryLogger.addMsg('La commande ' + this.id + ' a été annulée.');
    }

    accept()
    {
        if(this.state === Order.PENDING) {
            this.timeleft = 90;
            this.state = Order.ACCEPTED;
            BakeryLogger.addMsg('La commande ' + this.id + ' a été acceptée.');
        }
    }

    complete()
    {
        if(this.state === Order.ACCEPTED) {
            this.state = Order.COMPLETED;
        }
    }
}

class Shop 
{
    constructor()
    {
        /** @var Bakery bakery */
        this.bakery = null;
        this.orders = [];
        this.runningOrder = null;
        this.running = false;
    }

    setBakery(_bakery)
    {
        this.bakery = _bakery;

        this.orders = [];
        
        for(let i=0; i<10; i++) {
            this.orders.push(new Order(this.bakery.level));
        }
    }

    update() 
    {
        this.bakery.update();

        for(let i = 0; i < 10; i++) {
            let o = this.orders[i];
            o.update(this.bakery.level);
        }

        if(this.getAcceptedOrders().length > 0) {
            this.runningOrder = this.acceptedOrders[0];
            if(this.bakery.deliver(this.runningOrder)) {
                this.runningOrder.complete();
            }
        }
        else {
            this.runningOrder = null;
        }
    }

    runningOrderBaguettes(id)
    {
        id = parseInt(id);
        return ((this.runningOrder !== null) ? ((this.runningOrder.id === id) ? this.bakery.baguettes : 0) : 0);
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
        return this.orders.filter(o => o.state === Order.PENDING);
    }
    
    getAcceptedOrders()
    {
        this.acceptedOrders =  this.orders.filter(o => o.state === Order.ACCEPTED).sort((a, b) => a.timeleft - b.timeleft);
        return this.acceptedOrders;
    }

}

export { BakeryLogger, BakeryMath, Bakery, Order, Shop }