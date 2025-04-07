const arr = [1, 1, 2, 2, 2, 3, 3, 1, 3, 3, 1];

const findTopKFrequent = (nums, k) => {
    const countMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (countMap[nums[i]]) {
            countMap[nums[i]] = countMap[nums[i]] + 1;
        } else {
            countMap[nums[i]] = 1
        }
    }

    console.log(countMap);

    const sortedArr = Object.entries(countMap).map(([nums, count]) => [count, parseInt(nums)]);
    console.log(sortedArr);

    sortedArr.sort((a, b) => b[0] - a[0]);
    console.log(sortedArr);

    // console.log(sortedArr.slice(0,k));

    return sortedArr.slice(0, k).map(pair => pair[1]);

}

const result = findTopKFrequent(arr, 2);
console.log(result);
