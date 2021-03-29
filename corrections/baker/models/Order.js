class OrderState 
{
    static EMPTY = 0;
    static PENDING = 1;
    static CANCELLED = 2;
    static ACCEPTED = 3;
    static DONE = 4;
}


class Order 
{
    static  idCount = 0;

    constructor()
    {
        this.id = 0;
        this.baguettes = 0;
        this.unitPrice = 0;
        this.totalPrice=0;
        this.timeLeft = 0;
        this.state = OrderState.EMPTY;
    }

    changeOrder(bakeryLevel ) {
        this.id= ++Order.idCount;
        this.baguettes = Math.random()*((bakeryLevel * 30) - 5)+5;

        this.unitPrice = Math.random()*((30*bakeryLevel/100) - (bakeryLevel /100))+(bakeryLevel /100);
        this.unitPrice = Math.round(this.unitPrice * 100) / 100;

        this.totalPrice = Math.round(this.unitPrice*this.baguettes*100)/100;

        this.timeLeft = Math.random()*((60) - 10)+10;
        this.state= OrderState.PENDING;
    }


}

export { OrderState, Order };