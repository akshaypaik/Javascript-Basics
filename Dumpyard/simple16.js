const nums = [1, 2, 3];

const sum = nums.reduce((a,b) => {
    a = a + b;
    return a;
}, 0);

console.log("sum: ", sum);
