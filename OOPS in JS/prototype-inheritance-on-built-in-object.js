const arr = [2, 5, 4, 9, 5, 3, 2, 3];

console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);   // Object.prototype

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());

