function abc(){
    console.log("invoked!");
}

abc();

(() => {
    console.log("immediately invoked!");
})();	// No explicit calling is required and is executed as soon as it is mounted to call stack.
