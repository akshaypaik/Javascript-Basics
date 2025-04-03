const nums = [1, 2, 3, 2];

const verifyContainsDeuplicate = (nums) => {
    let newArr = [];
    let containsDuplicate = false;
    for(let i=0; i<nums.length; i++){
        const index = newArr.findIndex((item) => item === nums[i]);
        if(index == -1){
            newArr.push(nums[i]);
        }else{
            containsDuplicate = true;
            return containsDuplicate;
        }
    }
    return containsDuplicate;
}

const hasDuplicate = (nums) => {
    return new Set(nums).size < nums.length;
}

const result = verifyContainsDeuplicate(nums);
const resultSet = hasDuplicate(nums);
console.log("result: ", result);
console.log("result using sets: ", resultSet);

