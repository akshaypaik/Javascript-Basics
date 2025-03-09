//object
const akshayDetails = {
  firstName: "akshay",
  lastName: "pai",
  dob: "12-03-1995",
  hobbies: [
    "gaming",
    "long ride/drive",
    "collecting antiques",
    "youtube",
    "learning tech",
    "stocks",
  ],
  spouse: "radhe",
  parents: {
    father: "krishnadas",
    mother: "kavitha",
  },
  education: ["school", "pu college", "engineering"],
};

//variable with key name
const { hobbies } = akshayDetails;
console.log(hobbies);

// variable with custom name as per my requirement
const { spouse: spouseName } = akshayDetails;
console.log(spouseName);

// we can provide default values to variables created using object destructuring -
//hometown does not exist it is set as default value []. without default values it will be undefined.
const { education: akshayEducation = [], hometown = [] } = akshayDetails;
console.log(akshayEducation, hometown);
