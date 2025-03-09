function counter(){
    let count = 0;
    return function(){
        return count++ ;
    }
}
const counterInstance = counter();
console.log(counterInstance());
console.log(counterInstance());
console.log(counterInstance());
// console.log(counter()());

function sum(a){
    return function sumtwo(b){
        return a + b;
    }
}

console.log("sum of function curry: ", sum(3)(4));

const akshayObj = {
    name: "akshay",
    age: 29,
    hobbies: [
        "gaming",
        "coding",
        "trading"
    ],
    printHobbies: function(){
        console.log(`my hobbies are: ${this.hobbies.join( )}`);
        
    }
}

akshayObj.printHobbies();

const radheObj = {
    name: "radhe",
    age: 27,
    hobbies: [
        "swimming",
        "painting",
        "eating akshay's head"
    ]
}

//through call we can borrow function's methods
akshayObj.printHobbies.call(radheObj);
akshayObj.printHobbies.apply(radheObj);
const radheObjDisplayHobbies = akshayObj.printHobbies.bind(radheObj);
// console.log("binding for later use: ", radheObjDisplayHobbies());
radheObjDisplayHobbies();

const dummyObj = {
    name: "dummy as the object name suggests",
    age: 0,
    address: "mars",
    phone: 69,
    gender: "prefer not to say"
}

const dummiestObj = Object.assign(dummyObj); //not a deep clone
// const dummiestObj = JSON.parse(JSON.stringify(dummyObj));   // deep clone
// dummiestObj.age = 1;
Object.freeze(dummiestObj); // it doesnot changes the properties of the objects and cannot delete/add properties as well
Object.seal(dummiestObj); // we can change the property value but cannot delete/add the properties
console.log("object keys: ", Object.keys(dummiestObj));
console.log("object entries: ", Object.entries(dummiestObj));
console.log("object values: ", Object.values(dummiestObj));
dummiestObj.name = "dummiest as the object name suggests";

console.log("dummy: ", dummyObj);
console.log("dummiest: ", dummiestObj);



