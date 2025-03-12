const numbers = [2, 5, 3];

const sum = numbers.reduce((total, numbers) => {
    return total = total + numbers;
}, 0);

console.log("numbers: ", numbers);
console.log("total sum: ", sum);


// **************************************************************************************************************

const deposits = [250, 500, 340, 750, 1500, 2100, 3600, 800];
// I want how many deposits are more than 1000 rs
// we can achieve this using reduce.
const numDepositThousand = deposits.reduce((acc, sum) => {
    acc = sum >= 1000 ? acc + 1 : acc;
    return acc;
}, 0); 
console.log("numDepositThousand: ", numDepositThousand);    // thats 3

