import BakeryMill from "./BakeryMill.js"; 
import BakeryOrder from "./BakeryOrder.js"; 
import Bakery from "./Bakery.js"; 
import BakeryShop from "./BakeryShop.js"; 

export default class BakeryUi
{
    static bakeryLevel = document.getElementById('bakeryLevel');
    static levelPrice = document.getElementById('levelPrice');
    static bakeryFlour = document.getElementById('bakeryFlour');
    static bakeryGold = document.getElementById('bakeryGold');
    static bakeryBaguette = document.getElementById('bakeryBaguette');

    
    static mills = document.querySelector('#mills article');
    static millPrice = document.getElementById('millPrice');
    
    static ordersList = document.getElementById('ordersList');
    static pendingList = document.getElementById('pendingList');
    static currentOrder = document.querySelector('#currentOrder legend');
    static currentProgress = document.querySelector('#currentOrder progress');

    static shop = null;

    static init()
    {
        BakeryUi.shop = new BakeryShop();
    }
    
    static updateBakery()
    {
        BakeryUi.bakeryLevel.innerText = BakeryUi.shop.bakery.level;
        BakeryUi.levelPrice.innerText = Bakery.currentPrice;
        BakeryUi.bakeryFlour.innerText = BakeryUi.shop.bakery.flour;
        BakeryUi.bakeryGold.innerText = BakeryUi.shop.bakery.golds.toFixed(0);
        BakeryUi.bakeryBaguette.innerText = BakeryUi.shop.bakery.baguettes;
    }

    static addMill()
    {
        if(BakeryUi.shop.bakery.addMill()) {
            BakeryUi.mills.innerHTML += '<img src="assets/mill.png" class="icon">';
            BakeryUi.millPrice.innerText = BakeryMill.currentPrice;
        }
    }

    static updatePendingOrders()
    {
        let orders = BakeryUi.shop.getPendingOrders();

        BakeryUi.ordersList.innerHTML = '';

        for(let oneOrder of orders) {
            BakeryUi.ordersList.innerHTML += BakeryUi.getOrderHtmlTd(oneOrder);
        }

        document.querySelectorAll('[data-delete]').forEach((item) => {
            item.addEventListener('click', BakeryUi.onOrderDeleteClick);
        });

        document.querySelectorAll('[data-accept]').forEach((item) => {
            item.addEventListener('click', BakeryUi.onOrderAcceptClick);
        });
    }

    static updateAcceptedOrders()
    {
        let orders = BakeryUi.shop.getAcceptedOrders();

        BakeryUi.pendingList.innerHTML = '';

        if(orders.length > 0) {

            BakeryUi.currentOrder.innerText = 'Commande N°' + orders[0].id + ' (' + BakeryUi.shop.bakery.baguettes + '/' + orders[0].baguettes + ')';
            BakeryUi.currentProgress.innerText = BakeryUi.shop.bakery.baguettes;
            BakeryUi.currentProgress.value = BakeryUi.shop.bakery.baguettes;
            BakeryUi.currentProgress.max = orders[0].baguettes;
            
            for(let oneOrder of orders) {
                BakeryUi.pendingList.innerHTML += BakeryUi.getOrderHtmlTd(oneOrder);
            }
        }
        else {
            BakeryUi.currentOrder.innerText = 'Aucune commande en cours';
            BakeryUi.currentProgress.innerText = '0';
            BakeryUi.currentProgress.value = 0;
            BakeryUi.currentProgress.max = 100;
        }

        
    }

    static onOrderDeleteClick(event)
    {
        BakeryUi.shop.cancelOrder(event.target.dataset.delete);
    }

    static onOrderAcceptClick(event)
    {
        BakeryUi.shop.acceptOrder(event.target.dataset.accept);
    }

    static getOrderHtmlTd(oneOrder)
    {
        let htmlOrder = '';
        //orders.innerHTML += '<div>COMMANDE de ' + oneOrder.baguettes + ' baguettes à '+ oneOrder.price +' Or par baguettes soit un total de '+ oneOrder.totalPrice +' Or.</div>';
        htmlOrder += '<tr>';
        htmlOrder += '<td>' + oneOrder.id + '</td>';
        htmlOrder += '<td>' + oneOrder.baguettes + '</td>';
        htmlOrder += '<td>' + oneOrder.price + '</td>';
        htmlOrder += '<td>' + oneOrder.totalPrice + '</td>';
        htmlOrder += '<td> ' + oneOrder.getTimeLeft() + '</td>';

        if(oneOrder.state < BakeryOrder.ACCEPTED) {
            htmlOrder += '<td>';

            if(oneOrder.state > BakeryOrder.CANCELLED) {
                htmlOrder += '<button data-accept="'+oneOrder.id+'">Accepter</button>';
            }
                
            htmlOrder += '<button data-delete="'+oneOrder.id+'">Supprimer</button>';
            htmlOrder += '</td>';
        }
        
        htmlOrder += '</tr>';
        return htmlOrder;
    }
}