// IMPORTANT:
// - Must preface relative file paths with / or ./ etc
// - Must include the .js at end of the file name
import BakeryShop from "./assets/BakeryShop.js"; 
import BakeryUi from "./assets/BakeryUi.js";


BakeryUi.init();
BakeryUi.addMill();

var gameRunning = true;

setInterval(() => {
    if(BakeryUi.shop.bakery.golds < -1) {
        if(gameRunning === true) {
            if(window.confirm('Vous avez fait faillite !\rRecommencer ?')) {
                document.location.reload();
            }
            gameRunning = false;
        }
    }
    else {
        BakeryUi.shop.update();
        BakeryUi.updateBakery();
        BakeryUi.updatePendingOrders();
        BakeryUi.updateAcceptedOrders();
    }
    
}, 1000);


document.getElementById('levelUp').addEventListener('click', () => {
    BakeryUi.shop.bakery.levelUp();
});


document.getElementById('buyMill').addEventListener('click', BakeryUi.addMill);
