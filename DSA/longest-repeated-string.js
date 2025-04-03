// aabbddd -> ddd
// hhjjjjfffhh -> jjjj

const str = "ajjjkkksssskkjjjjjaaaaaa";

const findLongestRepeatedChar = (str) => {
    const longestStrObj = {};
    for (let i = 0; i < str.length; i++) {
        if (longestStrObj[str[i]] && longestStrObj[str[i - 1]] === longestStrObj[str[i]]) {
            longestStrObj[str[i]] = longestStrObj[str[i]] + 1;
        } else {
            longestStrObj[str[i]] = 1;
        }
    }
    console.log("longestStrObj: ", longestStrObj);
    let longestChar = "";
    let longest = 0;
    for (let item of Object.keys(longestStrObj)) {
        if (longestStrObj[item] > longest) {
            longest = longestStrObj[item];
            longestChar = item;
        }
    }
    // console.log(longestChar);
    return longestChar.repeat(longest);
}

const result = findLongestRepeatedChar(str);
console.log(result);
