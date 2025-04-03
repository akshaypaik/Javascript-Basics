const arr = [1,2,3];
const arr2 = [4,5,6];

const result = arr.reduce((sum, num) => {
    return sum += num;
}, 0);

console.log("result: ", result);

// Polyfill for reduce
Array.prototype.myReduce = function(callback, initialValue = null){
    let accumulator = initialValue;
    for(let i=0; i< this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

const result2 = arr2.myReduce((sum, num) => {
    return sum += num;
}, 0);

console.log("result myReduce: ", result2);



