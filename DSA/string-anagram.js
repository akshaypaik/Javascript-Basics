let s = "racecar";  //true
let t = "carrace";

// let s = "jar"; // false
// let t = "jam"

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
const checkAnagram = (s, t) => {
    return s.split("").sort().join("") === t.split("").sort().join("");
}

const result = checkAnagram(s, t);
console.log("result: ", result);
