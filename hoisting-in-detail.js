// Hoisting -> a phenomenon where you can access variables and function even before you have initialised it without any errors

// getFullName();
// getMiddleName();

getName();  // Akshay Pai
console.log(getName);   // function code
console.log(x); // undefined

// this variable is hosited
var x = 12;

// this function will be hoisted.
function getName() {
    console.log("Akshay Pai");
}

console.log(x); // 12

// getFullName will be treated as a variable and this will be assigned with undefined in memory creation phase
var getFullName = () => {
    console.log("Akshay Krishnadas Pai");
}

// getMiddleName will be treated as a variable and this will be assigned with undefined in memory creation phase
var getMiddleName = function () {
    console.log("Krishnadas");
}


