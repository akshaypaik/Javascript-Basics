var a = 100;
let b = 40;
{
    var a = 10; // 'a' is present in same memory space (global space)
    // let and const are block scoped
    let b = 20;
    const c = 30;
    console.log(b); // 20
}

{
    let b = 10;
    console.log(b); // 10
}

function x(){
    var a = 30; // 'a' is present in function x's local memory space. invoking a function creates a new execution context.
    console.log(a); // 30
}
x();

console.log(a); // 10   // 'a' is present in same memory space (global space)
console.log(b); // 40
console.log(c); // ReferenceError: c is not defined
