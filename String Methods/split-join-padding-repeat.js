const str = "a+very+nice+string";

const strArr = str.split("+");
console.log("strArr: ", strArr);

const fullName = "Akshay Pai";
const [firstname, lastname] = fullName.split(" ");
console.log("fullName: ", fullName);
console.log("firstname: ", firstname);
console.log("lastname: ", lastname);
// console.log(`Mr. ${lastname}`);
const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log("newName: ", newName);

const capitalizeName = (name) => {
    const nameArr = name.split(" ");
    const namesUpper = [];
    for (let n of nameArr) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(" "));
}

capitalizeName('akshay pai');


// padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); // first arguement is length and second arguement is character to pad the string with

console.log(message.padEnd(25, "+"));

const maskCreditCard = (creditCardNumber) => {
    const str = creditCardNumber + '';  // convert number to string
    const last4Digits = str.slice(-4);
    return last4Digits.padStart(str.length, '*');
}

console.log(maskCreditCard(43715264874533007));

// repeat
const messageTwo = "Bad weather... All departures delayed! ";
console.log(messageTwo.repeat(5));




