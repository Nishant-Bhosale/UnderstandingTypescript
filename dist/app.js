"use strict";
// function addNumbers(
// 	num1: number,
// 	num2: number,
// 	showResult: boolean,
// 	phrase: string,
// ) {
// 	let result = num1 + num2;
let literalType; //Literal type
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine("Hello", "world"));
console.log(combine(5, 5));
//Function type
let newFunctionType;
function add(a, b) {
    return a + b;
}
function printResult(a) {
    console.log(a);
}
newFunctionType = add;
// newFunctionType = printResult;
//Classes in TypeScript
class Person {
    constructor(n) {
        this.hobbies = [];
        this.name = n;
    }
    describeYourself() {
        console.log(`Hello ${this.name}`);
    }
    addHobbies(hobby) {
        this.hobbies.push(hobby);
    }
    viewHobbies() {
        console.log(this.hobbies);
    }
}
const newPerson = new Person("Nishant");
newPerson.describeYourself();
newPerson.addHobbies("Reading");
newPerson.viewHobbies();
console.log(newPerson);
console.log(newPerson.name);
