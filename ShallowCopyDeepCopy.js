const obj1 = {
    perName: "akshay"
}

//shallow copy
// const obj2 = obj1;
//shallow copy
const obj3= Object.assign(obj1);

//deep copy
const obj2 = JSON.parse(JSON.stringify(obj1));


console.log(obj1);
console.log(obj2);

obj2.perName = "radhe";

console.log(obj1);
console.log(obj2);
console.log(obj3);
