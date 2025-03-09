// let firstName = "Akshay";
// const surname = "Pai";

// //firstName = "Kamath";

// console.log("first name: ", firstName + "\n" + "last name: ", surname);

// console.log(typeof null);

// let markMass = 78;
// let johnMass = 92;
// let markHeight = 1.69;
// let johnHeight = 1.95;

// let bmiMark = markMass / (markHeight * markHeight);
// let bmiJohn = johnMass / (johnHeight * johnHeight);

// let markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);

const firstName = "Akshay";
const job = "Programmer";
const age = 28;

const combData = `I'm ${firstName}, a ${age} year old ${job}`;
console.log(combData);

// falsy values -> 0, '', undefined, null, NaN

function calcAge(yearBirth) {
  const age = 2023 - yearBirth;
  return age;
}

const myAge = calcAge(1995);
console.log("myAge: ", myAge);

const friends = [
  "Gondi",
  "Suhas",
  "Akarsh",
  "Sheetal",
  "Karthik",
  "Suhas M S",
  "Manu",
  "Ragini",
];
friends.push("Chirudeep");
friends.unshift("Amma");

// remove elements
friends.pop();
friends.splice(2, 1);
console.log(friends);
