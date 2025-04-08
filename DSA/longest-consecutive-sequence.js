const arr = [100, 4, 200, 1, 3, 2];

const longestConsecutiveSequence = (arr) => {
    const numSet = new Set(arr);
    let longest = 0;
    console.log(numSet);
    for (let num of arr) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
}

const result = longestConsecutiveSequence(arr);
console.log(result);
