class Car{
//attributes
//methods
model: string;
year:number;
constructor(model:string,year:number){
    this.model=model;
    this.year=year;
    
}
drive(){console.log("i drive the car")}
drift(){console.log("i drift the car")}
stop(){console.log("i stop the car")}

// const car =new Car("tesla",2023,"15000$");
// console.log(car.drive())

}
class Honda extends Car{
    color:string;
    wheels:number;
    seats:string;
    constructor(model:string,year:number,color:string,
        wheels:number,seats:string){
            super(model,year);
            this.color=color;
            this.wheels=wheels;
            this.seats=seats;
        }
speed(){console.log("the speed of car is rocket_like")}
}

const old_car=new Car("tesla",2023,);
const newcar=new Honda("2002",2004,"black",4,"comfortable");

old_car.drift();
newcar.speed();
