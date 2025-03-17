// In js, every number is presented in decimal format.
console.log(23 === 23.0);   // true

// Base 10 - 0 to 9
// Binary base 2 - 0 and 1
// in Js, numbers are represented in base 2 thats why we run into wierd result in below console log
console.log(0.1 + 0.2); // weird result
console.log(0.1 + 0.2 === 0.3); // false but actually this is true

// +'string' when js sees + operator it does type conversion.
console.log(+'23');

// parsing
// js will figure out the number in this console log
// this should always start with number
console.log(Number.parseInt('30px'));   // 30

console.log(Number.parseInt('e12'));    // NaN
 
console.log(Number.parseInt('  2.5rem  ')); // 2    (white spaces doesnot affect anything)
console.log(Number.parseFloat('2.5rem'));   // 2.5

console.log(Number.isNaN(20));  //false
console.log(Number.isNaN('20'));    // false
console.log(Number.isNaN(+'20px')); // true
console.log(Number.isNaN(23 / 0));  // false    (Infinity)

// Best way to check if a value is a number
console.log(Number.isFinite(20));   // true
console.log(Number.isFinite('20'));   // false
console.log(Number.isFinite(+'20px'));  // false
console.log(Number.isFinite(23 / 0));  // false    (Infinity)












