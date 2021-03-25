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


    constructor()
    {
        this.id = 0;
        this.baguettes = 0;
        this.unitPrice = 0;
        this.totalPrice;
        this.timeleft = 0;
        this.state = OrderState.EMPTY;
    }
}

export { OrderState, Order };