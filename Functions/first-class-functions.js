a();

// function statement aka function declaration
function a() {
    console.log("a is called");
}

// function expression
var b = function () {
    console.log("b is called");
}
b();

// anonymous function
// function () {

// }

// named function expression
var c = function d() {
    console.log("c is called");
}
c();
// d();    //referenceError: d is not defined


// first class functions (first class citizens)
// ability to use functions as values and pass this as an arguement to another functions.
var firstClass = function (param1) {
    console.log(param1);
}
function firstClassArguement() {
    console.log("I am an arguement");
}
firstClass(firstClassArguement);


// arrow function
const abc = () => {
    console.log("abc is called");
}
abc();