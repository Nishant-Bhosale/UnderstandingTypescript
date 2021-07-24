// function addNumbers(
// 	num1: number,
// 	num2: number,
// 	showResult: boolean,
// 	phrase: string,
// ) {
// 	let result = num1 + num2;

// 	if (showResult) {
// 		console.log(phrase + result);
// 	} else {
// 		return result;
// 	}
// }

// const printResult = true;
// const phrase = "Result is: ";
// addNumbers(3, 9, printResult, phrase);

// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "Nishant",
// 	age: 19,
// 	hobbies: ["Reading", "Anime"],
// 	role: [9, "Basketball Player"],
// };

// enum Role {
// 	ADMIN,
// 	PLAYER,
// 	USER,
// }

// const person = {
// 	name: "Nishant",
// 	age: 19,
// 	hobbies: ["Reading", "Anime"],
// 	role: Role.PLAYER,
// };

// console.log(person.role);

type Combinable = number | string;

let literalType: "as-text" | "as-number"; //Literal type

function combine(input1: Combinable, input2: Combinable) {
	if (typeof input1 === "number" && typeof input2 === "number") {
		return input1 + input2;
	} else {
		return input1.toString() + input2.toString();
	}
}

console.log(combine("Hello", "world"));

console.log(combine(5, 5));

//Function type

let newFunctionType: (a: number, b: number) => number;

function add(a: number, b: number): number {
	return a + b;
}

function printResult(a: number): void {
	console.log(a);
}

newFunctionType = add;
// newFunctionType = printResult;

//Classes in TypeScript

class Person {
	name: string;
	age: number;
	private hobbies: string[] = [];
	private readonly id: number = 3;

	constructor(n: string, age: number) {
		this.name = n;
		this.age = age;
	}

	describeYourself(this: Person) {
		console.log(`Hello ${this.name}. Your id is ${this.id}`);
	}

	addHobbies(hobby: string) {
		this.hobbies.push(hobby);
	}

	viewHobbies() {
		console.log(this.hobbies);
	}
}

const newPerson = new Person("Nishant", 19);

newPerson.describeYourself();
newPerson.addHobbies("Reading");

newPerson.viewHobbies();
console.log(newPerson);
console.log(newPerson.name);

class Harshad extends Person {
	constructor(public lastName: string) {
		super("Harshad", 11);
	}

	getFullName() {
		console.log(`Full name is ${this.name} ${this.lastName}`);
	}
}

const anotherPerson = new Harshad("Bhosale");

console.log(anotherPerson);

anotherPerson.getFullName();
