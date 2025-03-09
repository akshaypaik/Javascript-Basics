const numbers = [2, 5, 3];

const sum = numbers.reduce((total, numbers) => {
    return total = total + numbers;
}, 0);

console.log("numbers: ", numbers);
console.log("total sum: ", sum);
