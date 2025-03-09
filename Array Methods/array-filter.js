const numbersArray = [ 2, 25, 15, 45, 36, 91, 16, 29, 43, 52, 63, 78, 81, 99, 104];

// filter returns new array
const newNumbersArray = numbersArray.filter(item => item > 80);
console.log("newNumbersArray: ", newNumbersArray);
console.log("numbersArray: ", numbersArray);
