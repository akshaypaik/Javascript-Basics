// Array
const arr = [
  "akshay",
  "nagu",
  "radhe",
  "kavitha",
  "krishnadas",
  "sumana",
  "ganesh",
];

arr.forEach((member, index, array) => {
  console.log(`Member ${index + 1}: ${member}`);
});

// Map
const currencies = new Map([
  ["INR", "Indian Rupees"],
  ["EUR", "EUROS"],
  ["USD", "US Dollars"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(["INR", "USD", "INR", "EUR", "EUR"]);
console.log("currenciesUnique: ", currenciesUnique);

currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});
