let response = [
  {
    name: "akshay",
    age: 27,
    id: 1,
    hobbies: ["stocks", "coding", "games", "gym", "gym"],
    companies: {
      accenture: 3.8,
      cognziant: 1.8,
      siemens: 0.2,
    },
  },
  {
    name: "radhe",
    age: 25,
    id: 2,
    hobbies: ["sketch", "painting", "teaching", "cooking", "painting"],
    companies: {
      xpheno: 1.3,
    },
  },
];

let objDetails = {
  name: "akshay",
  age: 27,
  id: 1,
  hobbies: ["stocks", "coding", "games", "gym"],
  companies: {
    accenture: 3.8,
    cognziant: 1.8,
    siemens: 0.2,
  },
};
console.log(response);
let index = response.findIndex((elm) => elm.id === 1);
response[index].age = 28;
console.log(response);

const keys = Object.keys(objDetails.companies);
console.log(keys);
const values = Object.values(objDetails.companies);
console.log(values);
const entries = Object.entries(objDetails.companies);
console.log(entries);

for (const [key, value] of entries) {
  //console.log("for loop: ", key, value);
  console.log(`In ${key}, I spent ${value} years!`);
}

// const uniqueHobbies = [...new Set(objDetails.hobbies)];
// console.log(uniqueHobbies);

for (const item of response) {
  const uniqueHobbies = [...new Set(item.hobbies)];
  console.log(uniqueHobbies);
}

const myMap = new Map();
const myHobbies = ["stocks", "coding", "games", "gym"];
const companiesWorked = {
  accenture: 3.8,
  cognziant: 1.8,
  siemens: 0.2,
};
myMap.set("name", "akshay");
myMap.set("age", 27);
myMap.set(myHobbies, "akshay");
myMap.set(3, "companies worked");
myMap.set(companiesWorked, "akshay's companies");
console.log(myMap);

const myHobbies2 = ["stocks", "coding", "games", "gym"];
const companiesWorked2 = {
  accenture: 3.8,
  cognziant: 1.8,
  siemens: 0.2,
};
//instead of set method
const myMap2 = new Map([
  ["name", "akshay"],
  ["age", 27],
  [myHobbies, "akshay"],
  [3, "companies worked"],
  [companiesWorked, "akshay's companies"],
]);
console.log("myMap2: ", myMap2);

const myName = "Akshay K Pai";
const firstName = myName.slice(0, myName.indexOf(" "));
const lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log("myName: ", myName);
console.log("firstName: ", firstName);
console.log("lastName: ", lastName);

const maskCreditCard = (number) => {
  let str = number + "";
  let last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(123456789123456));
