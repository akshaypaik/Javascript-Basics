const airlines = "Air India Express";

console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// fix capitalization in name
const passenger = "AksHaY";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log("passenger: ", passenger);
console.log("passengerCorrect: ", passengerCorrect);

// comparing emails
const email = "hello@akshay.com";
const loginEmail = " Hello@AkshAy.coM \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();    // method chaining for shorthand
console.log("normalizedEmail: ", normalizedEmail);
console.log(email === normalizedEmail); // true

// replacing
const priceBlore = '7000.00₹';
const priceEurope = priceBlore.replace('.', ',').replace('₹', '€');
console.log("priceBlore: ", priceBlore);
console.log("priceEurope: ", priceEurope);

const announcement = "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll('door', 'gate'));   // if you use replace it will only replace first occurance.

const plane = "A320 Neomax";

console.log(plane.includes("A320"));    // true
console.log(plane.includes("India"));   // false
console.log(plane.includes("A3"));  // true
console.log(plane.startsWith("A3"));    // true
console.log(plane.startsWith("Ind"));    // false

if(plane.startsWith("A320") && plane.endsWith("max")){
    console.log(`Part of Neo Plane family!`);
}









