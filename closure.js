// function sum(a){
//     return function sumTwo(b){
//         return a + b;
//     }
// }
// console.log(sum(1)(2));

function createCounter() {
    let count = 0;  // This is the outer function's variable

    return function() {  // This is the inner function, which forms the closure
        count++;  // Inner function uses the outer function's variable `count`
        return count;
    };
}

const counter1 = createCounter();  // Create a new counter instance
console.log(counter1());  // Output: 1
console.log(counter1());  // Output: 2
console.log(counter1());  // Output: 3

const counter2 = createCounter();  // Create another counter instance
console.log(counter2());  // Output: 1


