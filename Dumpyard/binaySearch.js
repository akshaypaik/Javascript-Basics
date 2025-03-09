const searchNumberInList = (arr, searchNum) => {
    // arr.sort((a, b) => a - b);
    // console.log(arr);

    const arrLength = arr.length;
    const midElm = arrLength / 2;
    console.log(arr[midElm]);
    if(searchNum == arr[midElm]){
        return midElm
    }
}

const arrayList = [1, 3, 6, 4, 8, 2];
searchNumberInList(arrayList, 3);

