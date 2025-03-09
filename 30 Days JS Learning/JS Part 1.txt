// CONCEPT 1
    // event bubbling and capturing -> click event will be propagated to its parent element and it then propogates to its parent till html element.
    var div = document.querySelector("#clickDiv");
    div?.addEventListener("click", (event) => {
      console.log("clickDiv clicked");
      //event.stopPropagation(); -> helps to stop propogation to its parent element
    });
    var div = document.querySelector(".mainArea");
    div?.addEventListener("click", () => {
      console.log("mainArea div clicked");
    });
    

    // CONCEPT 2
    //closure -> function retains its parameter and variable values even after return.
    var sum = function(a){
      var c = 1;
      return function(b){
        return a+b+c;
      }
    }
    var storeSum =  sum(2);
    console.log("storeSum: ", storeSum(3));


    // CONCEPT 3
    //apply, call and bind in JS
    let userDetails = {
      name: "Akshay",
      age: 27,
      desgination: "Software Engineer",
      printDetails: function(){
        console.log("printDetails: ", this);
      }
    }
    userDetails.printDetails();
    let userDetailsTwo = {
      name: "Radhe",
      age: 25,
      desgination: "Talent Specialist",
    }
    //function borrowing
    userDetails.printDetails.call(userDetailsTwo);
    let printName = function(state, country){
      //console.log("printname: ", this.name + " " + state + " " + country);
    }
    printName.call(userDetails, "Delhi", "India");
    printName.apply(userDetails, ["Delhi", "India"]);   // same as call but we pass arguement as form of array list
    var storePrintName = printName.bind(userDetails, "Delhi", "India");   // same as call but we do not call directly but store it in a variable and then use it when needed
    storePrintName();   // called when necessary after saving using bind


    // CONCEPT 4
    // High order functions

    const companies = [
      { name: "Google", category: "Product", start: 1981, end: 2004 },
      { name: "Amazon", category: "Product", start: 1992, end: 2008 },
      { name: "Paytm", category: "Product", start: 1999, end: 2007 },
      { name: "Coforge", category: "Service", start: 1989, end: 2010 },
      { name: "Mindtree", category: "Service", start: 1989, end: 2010 }
    ];

    const ages = [ 24, 29, 51, 47, 12, 5, 69, 85, 36, 38, 22, 74, 21, 13, 9 ];

    // standard for loop
    // for(let i = 0; i < companies.length ; i++){
    //   console.log(companies[i]);
    // }

    // forEach
    companies.forEach((company, index) => {
      console.log(company);
    });

    // filter
    const filteredAges = ages.filter(age => age < 10);
    console.log("filteredAges: ", filteredAges);

    //reduce
    const totalAges = ages.reduce((total, age) => {
      return total + age;
    }, 0);
    console.log("totalAges: ",totalAges);

    //sort
    const sortedAges = ages.sort((a, b) => {
      return a - b;
    });
    console.log("sortedAges: ",sortedAges);


    // CONCEPT 5
    // Function currying
    const addition = function(a){
      return function(b){             // a function is getting returned inside a function which is a closure. which retains the value of parameters even after returning.
        return function(c){
          return a+b+c;
        }
      }
    }
    const additionResultNormal = addition(1);
    const additionResultOne = additionResultNormal(2);
    const additionResultTwo = additionResultOne(3);
    console.log("additionResultTwo: ", additionResultTwo);
    const additionResult = addition(1)(2)(3);   // this is currying (this is instead of additionResultTwo we do directly)
    console.log("additionResult: ",additionResult);