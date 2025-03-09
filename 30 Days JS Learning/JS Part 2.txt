let num = 2;

let num2 = num;         // variable value is copied

num = 3;

console.log(num2);

console.log(num);



let obj1 = {
    name: "akshay"
}

//let obj2 = obj1;        // object pointer reference is copied

let obj2 = {
    ...obj1                 // spread operator
}; 

obj1.name = "radhe";

console.log(obj1);

console.log(obj2);



//rest 

function addSum(...nums){               // rest operator
    const result = nums.reduce((total, elements) => {
        return total += elements;
    }, 0);
    return result;
}

const output = addSum(1,2,3);
console.log(output);


//spread


const oldArr = [1,2,3];

const newArr = [...oldArr, 4];

console.log(oldArr);
console.log(newArr);