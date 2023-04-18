const carOb = {
    make : "Maruti",
    model : "Ertiga",
    year : 2012,
    color : "white",

    getInfo () {
        return "The car is " + this.make + 
        " model " + this.model + " year " + 
        this.year + " in color " + this.color 
    }
}

console.log(carOb.getInfo())