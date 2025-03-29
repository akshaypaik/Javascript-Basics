'use strict';

const Person = function(firstname, birthYear) {
    console.log(this);  // Person {}
    // Instance properties
    this.firstname = firstname;
    this.birthYear = birthYear;

    // Never create method inside constructor function
    // this.calcAge = function(){
    //     console.log(2037-this.birthYear);
    // }
}

const akshay = new Person("Akshay", 1995);
const radhe = new Person("Radhe", 1997);
const kavitha = new Person("Kavitha", 1962);
const krishnadas = new Person("Krishnadas", 1958);
console.log(akshay);
console.log(radhe);
console.log(kavitha);
console.log(krishnadas);

// what happens when you do new Person("Akshay", 1995);
// 1. New empty object is created
// 2. Function is called, this keyword is set to this newly created empty object {}
// 3. New created empty object is linked to prototype
// 4. Function automatically return {}