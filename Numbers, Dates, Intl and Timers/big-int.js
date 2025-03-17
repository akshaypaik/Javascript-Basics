console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

// big int
console.log(4513135154848132132131545);
console.log(4513135154848132132131545n);    // big int by adding 'n' at the end
console.log(BigInt(4513135154848)); // using big int constructor

// Operations
console.log(1000n + 1000n); // 2000n
const huge = 775244254548720424242n;
const num = 24;
// console.log(huge * num);    // cannot mix big int with other types
console.log(huge * BigInt(num));    // this is where we use big int constructor

// Exceptions
console.log(20n > 15);  // true
console.log(20n === 20);    // false    (because they both are different types)
console.log(typeof 20n);    // bigint







