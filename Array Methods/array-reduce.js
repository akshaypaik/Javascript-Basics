const numbers = [2, 5, 3];

// total is a new variable initialized with 0 and number is each element we loop through numbers
const sum = numbers.reduce((total, number) => {
    return total = total + number;
}, 0);

console.log("numbers: ", numbers);  // [2, 5, 3]
console.log("total sum: ", sum);    // 10


// **************************************************************************************************************

const bankTransactions = [250, 500, 340, 750, -800, 1500, 2100, 3600, 800, -150, -750, -360];
// I want how many deposits are more than 1000 rs
// we can achieve this using reduce.
const numDepositThousand = bankTransactions.reduce((acc, sum) => {
    acc = sum >= 1000 ? acc + 1 : acc;
    return acc;
}, 0); 
console.log("numDepositThousand: ", numDepositThousand);    // thats 3

// I want to get all the deposit and withdraw count 
// acc.withdrawals += sum; is a shorthand of acc.withdrawals = acc.withdrawals + sum;
const sums = bankTransactions.reduce((acc, sum) => {
    sum > 0 ? acc.deposits = acc.deposits + sum : acc.withdrawals += sum;
    return acc;
}, { deposits: 0, withdrawals: 0 });
console.log(`Amount of deposits is ${sums.deposits} and withdrawals is ${sums.withdrawals}`);   //Amount of deposits is 9840 and withdrawals is -2060

