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

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();

	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);
