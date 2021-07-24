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
