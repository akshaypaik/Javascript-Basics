// console.log(a); // ReferenceError: Cannot access 'a' before initialization

// The time between let variable 'a' was hoisted and till it is initialized some value -> Temporal Dead Zone
let a = 10; // anything before line number 4 is a temporal dead zone to 'a' and we get reference error.

console.log(a); // 10

var b = 20;

console.log(window.a);   // undefined   -> let and const are not in window object. It is present in seperate memory space

console.log(window.b);   // 20  -> var variables are attached to 'window' global object.

console.log(this.b);    // 20   -> In global object this refers to window object.

console.log(this === window);   // true

// const must be initialized 
const name = "akshay";
