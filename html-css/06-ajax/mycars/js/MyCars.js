
class MyCars
{

    constructor(elementId)
    {
        this.data = null;
        this.element = document.getElementById(elementId);
    }

    /**
     * lit un tableau contenant des objets "cars"
     * le tableau provient du JSON récupéré par fetch() (plus bas)
     * @param array data les données des voitures
     */
    readCars(data, force = false)
    {
        if((this.data == null) || (force === true)) {
            this.data = data;
        }

        this.element.innerHTML = "";
        
        let carList = document.createElement('ol'); // 
    
        for (let i=0; i < data.length; i++) {
    
            let myCar = data[i];
            let aCar = document.createElement('li');
            aCar.innerHTML = myCar.car_name + " " + myCar.car_weight + " " + myCar.car_origin;
            carList.append(aCar);
    
        }
    
        this.element.append(carList);
    }
}
