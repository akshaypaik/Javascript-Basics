const deposits = [200, 150, -250, 485, 640, 852, -412, 350];

// condition - for any value if this condition is true this will return true
const anyPositiveDeposits = deposits.some(item => item > 0);
console.log("anyPositiveDeposits: ", anyPositiveDeposits);    // true


// Grant loan only if customer has deposited 10% of the loan amount requested
const requestedLoanAmount = 50000;
const isLoanCreteriaMet = deposits.some(item => {
    const tenPercentOfLoan = (requestedLoanAmount/100) * 10;
    console.log("tenPercentOfLoan: ", tenPercentOfLoan);
    return item >= tenPercentOfLoan;
});
console.log(`Loan ${isLoanCreteriaMet ? 'granted' : 'declined'} for amount ${requestedLoanAmount}`);


// every - returns true if all of the elements in the array satisfies the condition we pass in
const allDepositsPositive = deposits.every(item => item > 0);
console.log("allDepositsPositive: ", allDepositsPositive);      // false

const positiveDepositAccount = [200, 4550, 247, 698, 150];
const allDepositsPositive2 = positiveDepositAccount.every(item => item > 0);
console.log("allDepositsPositive2: ", allDepositsPositive2);        //true



