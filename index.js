"use strict";
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    drive() { console.log("i drive the car"); }
    drift() { console.log("i drift the car"); }
    stop() { console.log("i stop the car"); }
}
class Honda extends Car {
    constructor(model, year, color, wheels, seats) {
        super(model, year);
        this.color = color;
        this.wheels = wheels;
        this.seats = seats;
    }
    speed() { console.log("the speed of car is rocket_like"); }
}
const old_car = new Car("tesla", 2023);
const newcar = new Honda("2002", 2004, "black", 4, "comfortable");
old_car.drift();
newcar.speed();
