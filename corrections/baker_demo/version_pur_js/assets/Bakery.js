import BakeryMill from "./BakeryMill.js"; 

export default class Bakery
{
    static currentPrice = 100;

    constructor()
    {
        this.level = 1;
        this.golds = 10080;
        this.flour = 100;
        this.mills = [];
        this.baguettes = 0;
    }

    update() 
    {
        this.mills.forEach((mill) => {
            this.flour += mill.getFlour();
            this.golds -= 0.05 * this.level;
        });

        if(this.flour > this.level + 1) {
            this.flour -= this.level + 1;
            this.golds -= 0.05 * this.level;
            this.baguettes += this.level;
        }
    }

    deliver(num, amount)
    {
        num = Math.abs(parseInt(num));
        if(this.baguettes >= num) {
            this.baguettes -= num;
            this.earn(amount);
            return true;
        }
        return false;
    }

    earn(amount)
    {
        amount = Math.abs(parseInt(amount));
        this.golds += amount;
    }

    pay(amount)
    {
        if(this.golds < amount) {
            alert('Pas assez d\'or ('+ (amount - this.golds) +' manquants)');
            return false;
        }

        this.golds -= amount;
        return true;
    }

    levelUp() {
        if(this.pay(Bakery.currentPrice)) {
            Bakery.currentPrice = (1 + this.level) * 100;
            this.level++;
            return true;
        } 
        return false;
    }

    addMill()
    {   
        if (this.level*1.5 < BakeryMill.totalMills) {
            alert('Niveau de boulangerie insuffisant');
            return false;
        }

        if(this.pay(BakeryMill.currentPrice)) {
            this.mills.push(new BakeryMill());
            return true;
        } 
        
        return false;
    }
}