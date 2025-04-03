// JS registers these callback functions and continues with the code execution

// const ingredients = ["olives", "spinach"];
const ingredients = ["olives", "mushrooms"];

const pizzaTimer = setTimeout((ingredientOne, ingredientTwo) => {
    console.log(`Here is your pizza with ${ingredientOne} and ${ingredientTwo}🍕`);
}, 3000, ...ingredients);  // we can pass arguements like this after the delay seconds
console.log("Waiting...");

// clearing a timer
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);  //uncomment line number 3 and check (timer will not run)

// every second this method is called
setInterval(() => {
 const now = new Date();
 console.log(now);
}, 1000);






