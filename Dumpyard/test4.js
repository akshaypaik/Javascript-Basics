let searchObj = {
    name: "default",
    age: 99,
    lastName: "defaultLast"
}

let searchCache = [
    { name: "name", rank: 0 },
    { age: "age", rank: 0 },
    { lastName: "lastName", rank: 0 }
]

const leastUsedObj = (key, value) => {
    

    const leastRank = searchCache.reduce((min, item) => item.rank < min.rank ? item : min, searchCache[0]);
    console.log("leastRank: ", Object.keys(leastRank)[0]);
    const leastUsedProp = Object.keys(leastRank)[0];
    console.log("searchObj: ", searchObj);
    if(searchObj[key]){
        console.log("inside if");
        searchObj[key] = value;
    }else{
        console.log("inside else");
        delete searchObj[leastUsedProp];
        searchObj[key] = value;
        console.log("searchCache: ", searchCache);
        searchCache = searchCache.filter((item, index) => {
            // console.log(Object.keys(item)[0]);
         return Object.keys(item)[0] != leastUsedObj});
         console.log("searchCache inside else: ", searchCache);
    }
    searchCache.map((item) => Object.keys(item)[0] === key ? item.rank++ : item.rank);

    console.log("searchCache: ", searchCache);
    console.log("searchObj: ", searchObj);
}

leastUsedObj("hobby", "cycle");

