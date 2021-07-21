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
