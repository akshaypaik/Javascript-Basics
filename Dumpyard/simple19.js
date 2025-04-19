// Function invocation in JS

// x is undefined in memory creation phase (phase 1) and will be assigned to 1 in code execution phase (phase 2) in global execution context
var x = 1;
// invoking a() function will create a new execution context for this function
a();
// invoking b() function will create a new execution context for this function
b();
console.log(x); // 1

// memory will be assigned to all variables and parameters
function a(){
    // x is undefined in memory creation phase (phase 1) and will be assigned to 10 in code execution phase (phase 2) in global execution context
    var x = 10;
    console.log(x); // 10
}

// memory will be assigned to all variables and parameters
function b(){
    // x is undefined in memory creation phase (phase 1) and will be assigned to 100 in code execution phase (phase 2) in global execution context
    var x=100;
    console.log(x); // 100
}

