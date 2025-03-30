const numbersArray = [ 2, 25, 15, 45, 36, 91, 16, 29, 43, 52, 63, 78, 81, 99, 104];

// filter returns new array
const newNumbersArray = numbersArray.filter(item => item > 80);
console.log("newNumbersArray: ", newNumbersArray);  // [ 91, 81, 99, 104 ]
console.log("numbersArray: ", numbersArray);    //[2, 25,  15, 45, 36, 91,16, 29,  43, 52, 63, 78,81, 99, 104] doesnot mutates the original array
