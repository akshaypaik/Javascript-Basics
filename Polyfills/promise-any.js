console.log("polyfill for promise.any");

const promise1 = new Promise((resolve, reject) => {
    resolve("this is first promise resolved");
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("this is second promise rejected after 1 second");
    }, 1000);
})

const promise3 = 30; // this is not a promise just included to do the edge cases

// Promise.any always gives back any promise which is first resolved promise in this case "promise1" (change promise1 to resolve)
Promise.any([promise1, promise2, promise3]).then((result) => {
    console.log("result: ", result);
}).catch((error) => {
    console.log("error: ", error);
});

// AggregateError: All promises were rejected (change promise1 to reject)
Promise.any([promise1, promise2]).then((result) => {
    console.log("result: ", result);
}).catch((error) => {
    console.log("error: ", error);
});

Promise.myAny = function(arrayOfPromises) {
    let counter = 0;
    let errors = [];
    return new Promise((resolve, reject) => {
        for(let i =0; i< arrayOfPromises.length;i++){
            Promise.resolve(arrayOfPromises[i]).then(data => resolve(data)).
            catch(e => {
                counter++;
                errors[i] = e;
                if(counter === arrayOfPromises.length){
                    reject(new AggregateError(errors));
                }
            })
        }
    })
}

Promise.myAny([promise1, promise2, promise3]).then((result) => {
    console.log("result: ", result);
}).catch((error) => {
    console.log("error: ", error);
});
