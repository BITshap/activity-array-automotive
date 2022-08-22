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

    started() {
        if (this.fuel > 0) {
            start == true;
        } else {
            console.log('Whoops! Looks like the roadtrip has to wait a little bit!')
        }
    }

    scheduleService(mileage){
        if (this.mileage > 30000) {
            this.maintenance == true;
            console.log('go check your car!')
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



let myCar = new Car('mercury', 'g-wagon', '2005', 'maroon', 50000, 'large')

myCar.loadPassenger(5)
myCar.started()
myCar.stop()
myCar.checkService()

console.log(myCar)




//this shows how to call from this module...

