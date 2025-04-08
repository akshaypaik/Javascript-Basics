const strArr = ["neet", "code", "love", "you"];

console.log("string list: ", strArr);

let encodedString = "";
const encodeString = (strArr) => {

    for (let i = 0; i < strArr.length; i++) {
        const strItemLength = strArr[i].length;
        encodedString += strItemLength + "#" + strArr[i];
    }

    return encodedString;
}

const encodeResult = encodeString(strArr);
console.log("encodeResult: ", encodeResult);

const decodeString = (str) => {
    const decodedArr = [];

    let i = 0;

    while (i < str.length) {
        let j = i;
        if (str[j] !== "#") {
            j++;
        }
        let length = parseInt(str.substring(i, j));
        i = j + 1;
        j = i + length;
        decodedArr.push(str.substring(i, j));
        i = j;
    }

    return decodedArr;
}

const decodeResult = decodeString(encodedString);
console.log("decodeResult: ", decodeResult);

