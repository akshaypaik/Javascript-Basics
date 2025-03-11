//Strings
const owners = ['Krishnadas', 'Akshay', 'Radhe', 'Kavitha'];
//mutates the original array
console.log(owners.sort());
console.log(owners);

// Numbers
const deposits = [200, 150, -250, 485, 640, 852, -412, 350];
//sort method does the sorting based on strings (converts everything to string and then it does sorting itself)
// console.log(deposits.sort());   // not really what we expected - doesnot works and nutates the original array
// console.log(deposits);

// return < 0 A,B (switch order)
// return > 0 B,A (switch order)
// return 1 means switch the oder that is > 0 (line number 14)

// ascending
// deposits.sort((a,b) => {
//     // return a - b;
//     if (a > b) return 1;
//     if (a < b) return -1;
// });
deposits.sort((a,b) => {
    return a - b;
});
console.log(deposits);

//descending
// deposits.sort((a,b) => {
//     // return a - b;
//     if (a > b) return -1;
//     if (a < b) return 1;
// });
deposits.sort((a,b) => {
    return b - a;
});
console.log(deposits);



const depositsNotToBeChanged = [200, 150, -250, 485, 640, 852, -412, 350];
// Use slice() method here to create a copy of the array so that you donot mutate the original array
const sortedDeposits = depositsNotToBeChanged.slice().sort((a,b) => {
   return a - b;
});

console.log("depositsNotToBeChanged: ", depositsNotToBeChanged);
console.log("sortedDeposits: ", sortedDeposits);



