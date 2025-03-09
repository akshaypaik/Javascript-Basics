const inputData = [
    {
        key: "Sample 1",
        data: "Data 1"
    },
    {
        key: "Sample 1",
        data: "Data 2"
    },
    {
        key: "Sample 2",
        data: "Data 1"
    },
    {
        key: "Sample 2",
        data: "Data 2"
    },
    {
        key: "Sample 1",
        data: "Data 3"
    },
    {
        key: "Sample 3",
        data: "Data 1"
    },
    {
        key: "Sample 3",
        data: "Data 2"
    }
]

// ramayan
const sortBasedOnKeys = (inputDataArray) => {
    const uniqueKeyName = new Set();
    const responseArray = [];
    for(const keyName of inputDataArray){
        uniqueKeyName.add(keyName.key);
    }
    console.log(uniqueKeyName);
    uniqueKeyName.forEach(keyName => {
        const keyValue = inputDataArray.map(item => item.key === keyName ? {...item} : null);
        responseArray.push({
            [keyName]: keyValue.filter(item => item != null)
        })
    })
    console.log(JSON.stringify(responseArray));
}

sortBasedOnKeys(inputData);

//shortcut
const output = {};

inputData.forEach(item => {
    if(output[item.key]){
        //key is available
        output[item.key].push(item);
    }else{
        output[item.key] = [item];
    }
})

console.log(output);
