"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//InstaceOf
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function printAbility(animal) {
    switch (animal.type) {
        case "bird":
            console.log(animal.ability);
            break;
        case "mammal":
            console.log(animal.anotherAbility);
    }
}
//Type Casting
const inputElement = document.querySelector(".inputElement");
const newError = {
    name: "Nishant",
};
function combineTwo(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const num = combineTwo(4, "hello");
num.split(" ");
//Generics
const names = ["Nishant Bhosale"];
names[0].split(" ");
//Promise Generic
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(43), 1000);
});
promise.then((num) => console.log(num));
//Custom Generic Function
//T extends object is a generic constraint
function mergeObject(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = mergeObject({ name: "Nishant" }, { lastName: "Bhosale" });
function countAndDescribe(element) {
    let description = "No Value is Assigned";
    if (element.length === 1) {
        description = "Got one Element";
    }
    else if (element.length > 1) {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}
//keyof property constraint
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Nishant" }, "name"));
console.log(countAndDescribe("Hello world")[1]);
//GENERIC CLASS TYPES
class Laptop {
    constructor() {
        this.processor = [];
    }
    addProcessor(newProcessor) {
        this.processor.push(newProcessor);
    }
    removeProcessor(processorName) {
        this.processor.splice(this.processor.indexOf(processorName), 1);
    }
    getProcessors() {
        return this.processor;
    }
}
const asus = new Laptop();
asus.addProcessor("i5");
console.log(asus.getProcessors());
//Decorators
// function logUser(bookName: string) {
// 	return function (constructor: Function) {
// 		console.log(constructor);
// 		console.log(bookName);
// 	};
// }
// @logUser("Bhagvad Gita")
// class Book {
// 	protected readonly name = "Elon Musk";
// 	protected readonly author = "Ashlee Vance";
// 	constructor() {
// 		console.log("Logging in ...");
// 	}
// }
// const newBook = new Book();
//Autobind
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
p.showMessage();
const btn = document.querySelector(".demo");
btn.addEventListener("click", p.showMessage);
