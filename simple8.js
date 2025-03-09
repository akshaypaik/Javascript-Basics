function add(a){
    return function add2(b){
        return a+b;
    }
}

console.log(add(1)(2));

function normalFunc(){
    console.log("I'm normal man!");
}

(function() {
    console.log("I'm an IIFE!");
})();

normalFunc();

//prototype chaining

function Animal(){
    var animal = true;
}

Animal.prototype.makeSomeSound = function (){
    return "some sound!";
}

function Dog(){
    var dog = true;
}

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    return "woof woof!";
}

let myDog = new Dog();
console.log(myDog.makeSomeSound());
console.log(myDog.bark());


//Closure

function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter();
counter();
counter();

//map

const arr = [1, 2, 3];
const arr2 = arr.map(item => item * 2);
console.log("arr: ", arr);
console.log("arr2: ", arr2);

//this example

const obj = {
    name: 'Bob',
    greet: () => {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
obj.greet();

//spread

const arrSpread = [1,2,3];
const arrSpread2 = [...arrSpread, 4];
const arrSpread3 = [...arrSpread];
console.log(arrSpread2);
arrSpread3.push(4, 5);
console.log(arrSpread3);
console.log(arrSpread);

function addSpreadFunc(a,b,c){
    return a+b+c;
}

console.log(addSpreadFunc(...arrSpread));

const akshayObj = {
    name: "akshay",
    age: 29
}

const personObj = { ...akshayObj, race: "human"}
console.log(personObj);

//rest 

function sumRest(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  
  console.log(sumRest(1, 2, 3)); // Output: 6
  console.log(sumRest(1, 2, 3, 4, 5)); // Output: 15

  function multiply(multiplier, ...args) {
    return args.map(num => num * multiplier);
  }
  
  console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

  const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]



// For objects
const originalObj = { a: 1, b: { c: 2 } };
const shallowCopyObj = { ...originalObj };

shallowCopyObj.b.c = 3;
console.log(originalObj.b.c); // Output: 3


