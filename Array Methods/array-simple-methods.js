const arr = ["a", "b", "c", "d", "e"];

// Slice
console.log("Slice");
console.log(arr.slice(2)); //"c", "d", "e"  gives element from 2 start index
console.log(arr.slice(1, 4)); //"b", "c", "d"   gives element from 1 start index to 4 end index. Note: end index isnot considered
console.log(arr.slice(-2)); //"d", "e"      gives last 2 elements of array if we give -2
console.log(arr.slice(-1)); //"e"       gives last element of array if we give -1
console.log(arr.slice(1, -2)); //"b", "c", "d"   gives element from 1 start index except last 2 elements which is negative -2 end index
console.log(arr.slice()); // shallow copy of array

// Splice
console.log("Splice");
console.log(arr.splice(2)); // remove elements from array
console.log(arr.splice(-1)); // remove last element from array
console.log(arr.splice(2, 2)); // remove elements from 2nd index for 2 elements. 2 is delete count
console.log(arr);

// Reverse
console.log("Reverse");
const arr2 = ["a", "b", "c"];
console.log(arr2.reverse());

//New At Method
const arr3 = [12, 24, 36];
console.log(arr3.at(1)); // gives element at 1 index
console.log(arr3.at(-1)); // gives last element
