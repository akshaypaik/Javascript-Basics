/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator 

TEST DATA:
*/

/*

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

*/

const breeds = [
    {
      breed: 'German Shepherd',
      averageWeight: 32,
      activities: ['fetch', 'swimming'],
    },
    {
      breed: 'Dalmatian',
      averageWeight: 24,
      activities: ['running', 'fetch', 'agility'],
    },
    {
      breed: 'Labrador',
      averageWeight: 28,
      activities: ['swimming', 'fetch'],
    },
    {
      breed: 'Beagle',
      averageWeight: 12,
      activities: ['digging', 'fetch'],
    },
    {
      breed: 'Husky',
      averageWeight: 26,
      activities: ['running', 'agility', 'swimming'],
    },
    {
      breed: 'Bulldog',
      averageWeight: 36,
      activities: ['sleeping'],
    },
    {
      breed: 'Poodle',
      averageWeight: 18,
      activities: ['agility', 'fetch'],
    },
  ];

// Store the the average weight of a "Husky" in a variable "huskyWeight"
const huskyWeight = breeds.filter((breed) => breed.breed === "Husky")[0].averageWeight;
//we can also use find method
const huskyWeightUsingFind = breeds.find(breed => breed.breed === "Husky").averageWeight;
console.log("huskyWeight: ", huskyWeight);
console.log("huskyWeightUsingFind: ", huskyWeightUsingFind);

//Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
const dogBothActivities = breeds.filter((breed) => breed.activities.includes("running") && breed.activities.includes("fetch"))[0].breed;
console.log("dogBothActivities: ", dogBothActivities);

//Create an array "allActivities" of all the activities of all the dog breeds
// Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = new Set([]);
breeds.flatMap((breed) => breed.activities).forEach((breed) => {
    uniqueActivities.add(breed);
});
const allActivities = breeds.flatMap((breed) => breed.activities);
console.log("allActivities: ", allActivities);
console.log("uniqueActivities: ", uniqueActivities);

// Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const swimmingAdjacent = breeds.filter((breed) => breed.activities.includes("swimming")).flatMap(item => {
    return item.activities;
}).filter(item => item != "swimming");
console.log("swimmingAdjacent: ", swimmingAdjacent);

// Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
const isAllDogBreedMoreThan10Kg = breeds.every(breed => {
    return breed.averageWeight > 10;
});
console.log("isAllDogBreedMoreThan10Kg: ", isAllDogBreedMoreThan10Kg);

//Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
const isAnyDogActive = breeds.some(breed => {
    return breed.activities.length >= 3;
});
console.log("isAnyDogActive: ", isAnyDogActive);

//What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator
const fetchBreedWeights = breeds.filter(breed => breed.activities.includes("fetch")).map(item => {
    return item.averageWeight;
});
const haviestFetchBreedWeight = Math.max(...fetchBreedWeights);
console.log("haviestFetchBreed: ", haviestFetchBreedWeight);







