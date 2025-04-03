const arr = [1,2,3];

const result = arr.map((item, index, array) => item*2);
console.log("result: ", result);

// Polyfill for map
Array.prototype.myMap = function(callback){
    let manipulatedArr = [];
    for(let i=0; i< this.length; i++){
        manipulatedArr.push(callback(this[i], i, this));
    }
    return manipulatedArr;
}

const result2 = arr.myMap((item) => item*3);
console.log("result2 myMap: ", result2);


