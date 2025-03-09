console.log("A");

setTimeout(() => {
    console.log("B");
});

const promise = () => {
    return Promise.resolve(
        console.log("inside promise"))
}

promise().then(console.log("F"));

['C', 'D'].forEach((x) => {
    console.log(x);
});

console.log("E");


// **************************************************************************************************************************************

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// **************************************************************************************************************************************
