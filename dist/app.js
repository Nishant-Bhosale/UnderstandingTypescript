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
