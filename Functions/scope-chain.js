// scope chain in JS

// a() is lexically (physically) inside global execution context so it will get access to lexical environment of global also.
function a() {
    var x = 99;
    // b is not present in local execution context's memory so it goes and searches in parent (lexical environment) and it is present and prints 10.
    console.log(b); //10
    // c() is lexically (physically) inside a() so it will get access to lexical environment of a() also.
    function c() {
        // x is not present in local execution context's memory so it goes and searches in parent (lexical environment) and it is present and prints 99.
        console.log(x); // 99
        // b is not present in local execution context's memory so it goes and searches in parent (lexical environment).
        console.log(b); // 10
    }
    c();
}

var b = 10;
a();
console.log(x); // ReferenceError: x is not defined