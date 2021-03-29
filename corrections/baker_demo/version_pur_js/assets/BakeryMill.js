export default class BakeryMill 
{
    static currentPrice = 80;

    static totalMills = 0;

    constructor()
    {
        this.price = BakeryMill.currentPrice;
        BakeryMill.currentPrice = 80 * ++BakeryMill.totalMills;            
    }

    getFlour()
    {
        return 1;
    }
}