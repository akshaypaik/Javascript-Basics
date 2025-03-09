let obj1 = {
    name: "akshay",
    age: 28
}

let obj2 = {
    designation: "SE",
    __proto__ : obj1
}

console.log(obj2.name);	// displays akshay (we can achieve inheritance by using prototypes)


// If we use Array we get methods like forEach, filter, findIndex etc through prototype.
// If we use Object we get toString etc.