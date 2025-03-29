// Prototypes

'use strict';
const Person = function (firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
}

const akshay = new Person("Akshay", 1995);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

console.log(Person.prototype);

akshay.calcAge();

console.log(akshay.__proto__);
console.log(akshay.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(akshay));    // true

console.log(Person.prototype.isPrototypeOf(Person));    // false

// We can set properties to prototype
Person.prototype.species = "Homo Sapiens";

console.log(akshay.species);

console.log(akshay.hasOwnProperty('firstname'));    //true
console.log(akshay.hasOwnProperty('species'));    //false

console.log(akshay.__proto__.__proto__);    // Object.prototype (top of prototype chain)
console.log(akshay.__proto__.__proto__.__proto__);  // null





