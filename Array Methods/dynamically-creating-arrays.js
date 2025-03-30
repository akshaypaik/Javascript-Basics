// Two ways to create arrays dynamically 
// 1. from method
// 2. Array().keys() method

const arr = Array.from({ length: 20 }, (_, index) => index);
console.log(arr);   // [0,  1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const arr2 = [...Array(20).keys()].map((item, index) => index + 1);
console.log(arr2);  // [1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
