"use strict";

// SCENARIO 1 - setting default values to parameters of function
const myBio = [];
// setting age and phonenumber default values 18 and 9999999999
function bio(name, age = 18, phoneNumber = 9999999999) {
  const bioObj = {
    name,
    age,
    phoneNumber,
  };
  myBio.push(bioObj);
}

bio("akshay");
console.log(myBio);

// SCENARIO 2 - call by value and call by reference in js
const flightNum = "AE4581";
const akshay = {
  name: "Akshay Pai",
  passport: "123RFC25",
};

const checkIn = (flightNumber, passenger) => {
  flightNumber = "ZE4562";
  if (passenger.passport === "123RFC25") {
    console.log("check in status: checked in!");
  } else {
    console.log("check in status: wrong passport!");
  }
};

const newPassport = (passenger) => {
  passenger.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(akshay);
checkIn(flightNum, akshay);
// primitive type string didnot change because it created a new variable inside function
// same like const flightNumber = flightNum;
console.log(flightNum);
// reference type object did change because it was referencing to same memory address in heap
// same like const passenger = akshay;
console.log(akshay);
