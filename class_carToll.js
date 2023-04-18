/* Write a program that declares the car type based on a selection number given below

1 | Car                         = Rs 100 Toll
2 | Sports Car                  = Rs 250 Toll
3 | SUV                         = Rs 200 Toll
4 | Truck                       = Rs 500 Toll
5 | Special Vehicle             = Free Passage

*/





class Cartoll {
   constructor (vehicle){
    this.vehicle = vehicle;
   }



toll() {
    if (this.vehicle === "car"){
        return "your vehicle is a " +this.vehicle + " and your toll is Rs 100/-" 
    }

    else if (this.vehicle === "sports car"){
        return "Your vehicle is a " +this.vehicle + " and your toll is Rs 250/-"
    }

    else if (this.vehicle === "SUV"){
        return "Your car is a " +this.vehicle + " and your toll is Rs 200/-"
    }

    else if (this.vehicle === "Truck"){
        return "Your car is a " +this.vehicle + " and your Rs 500/-"
    }

    else {
        return "No tax is required"
    }
}
}

const vehicle1 = new Cartoll("SUV");
console.log (vehicle1.toll());