class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]);
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
const minStackValue = new MinStack();
console.log(minStackValue.push(1));
console.log(minStackValue.push(2));
console.log(minStackValue.push(0));
console.log(minStackValue.getMin()); // return 0
console.log(minStackValue.pop());
console.log(minStackValue.top());    // return 2
console.log(minStackValue.getMin()); // return 1
