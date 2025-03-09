const arr = [1,2,3,[4,[5,6]],7,8];

const flattenArr = (arr, flattenArray) => {
    for(let i = 0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            flattenArr(arr[i], flattenArray);
        }else{
            flattenArray.push(arr[i]);
        }
    }
    return flattenArray;
}

console.log(flattenArr(arr, []));
