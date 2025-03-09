const createCounter = function (init){
    let presentCount = init;
    return {
        increment: () => {
            return ++presentCount;
        },
        reset: () => {
            return presentCount = init;
        },
        decrement: () => {
            return --presentCount;
        }
    }
}

const counter = createCounter(5);
console.log(counter.increment()) // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.decrement()) // 3
console.log(counter.reset()); // 5