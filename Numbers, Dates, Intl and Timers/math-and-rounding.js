// square root
console.log(Math.sqrt(25)); // 5
console.log((25 ** (1/2))); // 5 (same for square root) we divide with 2

// cubic
console.log(8 ** (1/3));    // 2 (cubic) we divide with 3

// max
console.log(Math.max(2, 5, 12, 6)); // 12
console.log(Math.max(2, 5, '12', 6)); // 12
console.log(Math.max(2, 5, '12px', 6)); // NaN (doesnot work with parsing)

// min
console.log(Math.min(2, 5, 12, 6)); // 2

// random
console.log(Math.trunc(Math.random() * 6) + 1);

// Random number generator
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding integer
console.log(Math.trunc(23.0));  // 23
console.log(Math.round(23.3));  // 23 (round always round to nearest integer)
console.log(Math.round(23.9));  // 24

console.log(Math.ceil(23.3));   // 24   (ceil always rounds up)
console.log(Math.ceil(23.9));   // 24

console.log(Math.floor(23.3));   // 24   (floor always rounds down)
console.log(Math.floor(23.9));   // 24

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
console.log((2.7).toFixed(0));  // 3 (toFixed always return a string)
console.log((2.7).toFixed(3));  // 2.700
console.log((2.7142).toFixed(2));  // 2.71
console.log((2.7159).toFixed(2));  // 2.72









