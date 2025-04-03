const arr = [
    {
        name: "akshay",
        city: "bangalore"
    },
    {
        name: "radhe",
        city: "bangalore"
    },
    {
        name: "abc",
        city: "delhi"
    },
    {
        name: "def",
        city: "mumbai"
    }
];

const filteredArr = arr.filter((item) => item.city === "bangalore");
console.log("filteredArr: ", filteredArr);

// Polyfill for filter
Array.prototype.myFilter = function (callback) {
    let resArr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resArr.push(this[i]);
        }
    }

    return resArr;
}

const myFilteredArr = arr.myFilter((item) => item.city === "bangalore");
console.log("myFilteredArr: ", myFilteredArr);