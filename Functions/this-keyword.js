"use strict" // this keyword behaves differently in strict mode and non strict mode.

// this in global space

console.log(this);  // global object (browser - window, nodejs - global) (depends on js runtime)


// this inisde a function

function x() {
    //this value depends on strict/non strict mode
    console.log(this);
}

// x();

// this inside non-strict mode (this substitution)

// If the value of this keyword is undefined or null 
// this keyword will be replaced with globalObject
// only in non strict mode

// this keyword value depends on how the function this is called (window)
x();    // undefined
// window.x(); // window


// this inside a object's method
const obj = {
    name: "akshay",
    age: 30,
    print: function (city) {
        console.log(this);
        console.log(`my name is ${this.name} and i belong to ${city}`);
    }
}

// this is object where the method print is present
obj.print("bangalore");


// call apply bind methods (sharing methods)
 const obj2 = {
    name: "radhe",
    age: 28
 }

 obj.print.call(obj2, "bangalore");  // call will take this keyword value as arguement. It will override this keyword.

 const obj3 = {
    name: "kavitha",
    age: 62
 }

 obj.print.apply(obj3, ["bangalore"]);  // in apply we send arguements in array like format

 const obj4 = {
    name: "krishnadas",
    age: 66
 }

 const result = obj.print.bind(obj4);   // bind attaches this into function and it needs to be invoked separately
result("bangalore");    // invoked separately


// this keyword inside arrow functions
// arrow function donot have their own "this"
// they take value of their lexical environment where they are enclosed

const objGlobalArrow = {
    name: "akshay",
    // print: function (){
    //     console.log(`my name is ${this.name}`);
    // }
    print: () => {
        console.log(`my arrow name is ${this.name}`);   // print belongs to objGlobalArrow which is enclosed in global object so "this" is undefined
    }
}

// where this objArrow is lexically present in the code (it is present in global space)
objGlobalArrow.print(); // objGlobalArrow is enclosed inside global object which is undefined

const objArrow = {
    name: "krishnadas",
    child: function () {
        const printName = () => {
            console.log(`my arrow name is ${this.name}`); // printName belongs to child which is enclosed in objArrow object so "this" is objArrow
        }
        printName();
    }
}

objArrow.child();   // child function is enclosed inside objArrow object which has name krishnadas


// this inside DOM elements => reference to HTML element
 