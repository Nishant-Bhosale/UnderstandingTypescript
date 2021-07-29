//Created an interface
interface Greetable {
	name: string;

	//Interface can have a method that should have a return type
	greet(phrase: string): void;
}

class AnotherPerson implements Greetable {
	name: string;
	public age = 30;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

let user1;

user1 = new AnotherPerson("Harshad");
console.log(user1.age);
user1.greet(`Hello`);

type Combinables = string | number;
type Numeric = number | boolean;

//Intersection of two union types
type universal = Combinables & Numeric;

type Employee = {
	name: string;
	startDate: Date;
};

type Admin = {
	name: string;
	privileges: string[];
};

type elevatedEmployee = Admin & Employee;

//Intersection of Employee and Admin
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(e1: UnknownEmployee): void {
	console.log(e1.name);

	if ("privileges" in e1) {
		console.log(e1.privileges);
	}
	if ("startDate" in e1) {
		console.log(e1.startDate);
	}
}

const newEmployee: UnknownEmployee = {
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

	loadCargo(amount: number) {
		console.log("Loaded Cargo = " + amount);
	}
}

const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;

//InstaceOf
function useVehicle(vehicle: Vehicle) {
	vehicle.drive();

	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
	type: "bird";
	ability: string;
}

interface Tiger {
	type: "mammal";
	anotherAbility: string;
}

type Animal = Bird | Tiger;

function printAbility(animal: Animal) {
	switch (animal.type) {
		case "bird":
			console.log(animal.ability);
			break;
		case "mammal":
			console.log(animal.anotherAbility);
	}
}

//Type Casting
const inputElement = <HTMLInputElement>document.querySelector(".inputElement");

//Index Type
interface ErrorContainer {
	[prop: string]: string;
}

const newError: ErrorContainer = {
	name: "Nishant",
};

type Combination = string | number;

//Functional Overload
function combineTwo(a: number, b: number): number;
function combineTwo(a: string, b: string): string;
function combineTwo(a: number, b: string): string;
function combineTwo(a: Combination, b: Combination) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	}
	return a + b;
}

const num = combineTwo(4, "hello");
num.split(" ");

//Generics
const names: Array<string> = ["Nishant Bhosale"];

names[0].split(" ");

//Promise Generic
const promise: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => resolve(43), 1000);
});

promise.then((num) => console.log(num));

//Custom Generic Function
//T extends object is a generic constraint
function mergeObject<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = mergeObject({ name: "Nishant" }, { lastName: "Bhosale" });

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let description = "No Value is Assigned";

	if (element.length === 1) {
		description = "Got one Element";
	} else if (element.length > 1) {
		description = `Got ${element.length} elements`;
	}

	return [element, description];
}

//keyof property constraint
function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U,
) {
	return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Nishant" }, "name"));
console.log(countAndDescribe("Hello world")[1]);

//GENERIC CLASS TYPES
class Laptop<T> {
	processor: T[] = [];

	addProcessor(newProcessor: T) {
		this.processor.push(newProcessor);
	}

	removeProcessor(processorName: T) {
		this.processor.splice(this.processor.indexOf(processorName), 1);
	}

	getProcessors() {
		return this.processor;
	}
}

const asus = new Laptop<string>();

asus.addProcessor("i5");
console.log(asus.getProcessors());

//Decorators

function logUser(bookName: string) {
	return function (constructor: Function) {
		console.log(constructor);
		console.log(bookName);
	};
}

@logUser("Bhagvad Gita")
class Book {
	protected readonly name = "Elon Musk";
	protected readonly author = "Ashlee Vance";

	constructor() {
		console.log("Logging in ...");
	}
}

const newBook = new Book();
