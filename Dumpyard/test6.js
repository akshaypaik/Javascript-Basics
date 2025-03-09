const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
console.log(stack.pop());   //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(stack);
console.log(stack.unshift(0));  //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(stack);
console.log(stack.shift(0));    //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(stack);

