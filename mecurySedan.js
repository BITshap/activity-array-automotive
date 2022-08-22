//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage, size) {
        super(make, model, year, color, mileage, size);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.maintenance = false;
    }

    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            if(this.passenger + num < this.maximumPassengers){
                console.log("You have room!")
            }
        }
    }

    scheduleService(mileage){
        if (this.mileage > 30000) {
            this.maintenance == true;
            console.log('go check your car!')
        }
    }

    start() {
        if (this.fuel > 0) {
            this.start == true;
            console.log('you can go!')
        } else {
            console.log('Whoops! Looks like the roadtrip has to wait a little bit!')
        }
    }
}

class Truck extends VehicleModule {
    constructor(make, model, year, color, mileage, size){
        super(make, model, year, color, mileage, size)
        this.maximumPassengers = 8;
        this.passenger = 0;
        this.numberOfWheels = 6;
        this.maxSpeed = 100;
        this.fuel = 5;
        this.maintenance = false;
    }
    sizeCheck(){
        if (this.size === 'large'){
            this.maxSpeed = 200;
            console.log('youve got a monster truck!')
        }
    }
}



let myCar = new Car('mercury', 'g-wagon', '2005', 'maroon', 50000, 'medium')
let myTruck = new Truck('mecury', 's-wagon', '2007', 'turqoise', 20000, 'large')
myCar.loadPassenger(2)
myCar.stop()
myCar.scheduleService(40000)
myCar.start()

myTruck.sizeCheck()

console.log(myCar)




//this shows how to call from this module...

