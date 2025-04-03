// const nums = [3,4,5,6]; 
// const target = 7;          // [0,1] 

const nums = [4,5,6], target = 10   // [0,2]

// const nums = [5,5], target = 10 // [0,1]

// Brute force = O(n2)
const getTwoSumIndexes = (nums, target) => {
    const indexes = [];
    for(let i=0; i< nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes;
}

// Best solution O(n)
const getSumUsingHashMap = (nums, target) => {
    const cacheMap = new Map();

    for(let i=0; i< nums.length;i ++){
        const diff = target - nums[i];
        if(cacheMap.has(diff)){
            return [cacheMap.get(diff), i];
        }
        cacheMap.set(nums[i], i);
        console.log("cacheMap: ", cacheMap);
        
    }


}


const result = getSumUsingHashMap(nums, target);
console.log("result: ", result);