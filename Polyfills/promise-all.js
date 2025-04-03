console.log("polyfill for promise.all");

const promise1 = new Promise((resolve, reject) => {
    resolve("this is first promise resolved");
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("this is second promise rejected after 1 second");
    }, 1000);
})

const promise3 = 30; // this is not a promise just included to do the edge cases

const promise4 = new Promise((resolve, reject) => {
    resolve("this is fourth promise resolved")
});

Promise.myAll = function (arrayOfPromises) {
    let counter = 0;
    let results = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arrayOfPromises.length; i++) {
            Promise.resolve(arrayOfPromises[i]).then((data) => {
                counter++;
                results[i] = data;
                if (counter === arrayOfPromises.length) {
                    resolve(results);
                }
            }).catch(error => reject(error))
        }
    });
}

// Input is array of promises or any value
// return array of result of input promises
// wait for all orimises to be resolved or any to be rejected
// you will not get result if any of promise is rejected
const result = Promise.myAll([promise1, promise2, promise3, promise4])
    .then(data => console.log(data))
    .catch(e => console.error(e));



