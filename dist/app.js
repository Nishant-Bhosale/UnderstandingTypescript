"use strict";
class AnotherPerson {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new AnotherPerson("Harshad");
console.log(user1.age);
user1.greet(`Hello`);
function printEmployeeInfo(e1) {
    console.log(e1.name);
    if ("privileges" in e1) {
        console.log(e1.privileges);
    }
    if ("startDate" in e1) {
        console.log(e1.startDate);
    }
}
const newEmployee = {
    name: "Max",
    startDate: new Date(),
    privileges: ["everything"],
};
printEmployeeInfo(newEmployee);
class Car {
    drive() {
        console.log("Driving....");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loaded Cargo = " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
