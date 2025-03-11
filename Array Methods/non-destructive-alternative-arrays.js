const deposits = [200, 150, -250, 485, 640, 852, -412, 350];

console.log("deposits: ", deposits);
// reverse() here is a destructive method as it mutated the original array "deposits"
const reverseDeposits = deposits.reverse();
console.log("reverseDeposits: ", reverseDeposits);
console.log("deposits: ", deposits);

const deposits2 = [200, 150, -250, 485, 640, 852, -412, 350];

console.log("deposits2: ", deposits2);
// toReversed() doesnot mutate the original array
const reverseDeposits2 = deposits.toReversed();
console.log("reverseDeposits2: ", reverseDeposits2);
console.log("deposits2: ", deposits2);

//toSorted (sort), toSpliced (splice) -> same like toReversed() which doesnot mutate the original arrays

// with method
console.log("deposits: ", deposits);    // [350, -412,  852,640,  485, -250,150,  200]
const newDeposits = deposits.with(1, 300);  // we want deposit array but with poisition (index) number 1 updated to 300
console.log("newDeposits: ", newDeposits);  // [350, 300,  852,640,  485, -250,150,  200]

