const arr = [1, [2, [3, [4]]]];

console.log(arr.flat(1)); // Output: [1, 2, [3, [4]]]
console.log(arr.flat(2)); // Output: [1, 2, 3, [4]]
console.log(arr.flat(3)); // Output: [1, 2, 3, 4]

const arr2 = [1, [2, [3, [4]]]];
console.log(arr2.flat(Infinity)); // Output: [1, 2, 3, 4]



//Polyfill for Older Environments:
function flatten(arr3, depth = 1) {
  return depth > 0
    ? arr3.reduce((flat, item) => flat.concat(Array.isArray(item) ? flatten(item, depth - 1) : item), [])
    : arr3.slice();
}

const arr3 = [1, [2, [3, [4]]]];
console.log(flatten(arr3, 2)); // Output: [1, 2, 3, [4]]