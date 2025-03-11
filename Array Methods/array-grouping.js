const movements = [200, 150, -250, 485, 640, 852, -412, 350];

// we do array grouping using Object.groupBy() 
// first arguement -> array
// second argument -> callback function to define how we want to group the array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
// const groupedMovements = Object.groupBy(movements, item => item > 0 ? 'deposits' : 'withdrawals');
const groupedMovements = Object.groupBy(movements, item => item > 0 ? 'deposits' : 'withdrawals');
console.log("groupedMovements: ", groupedMovements);
