const result = {};
const obj = {
    A: (a,b,c)=> a+b+c,
    B: (a,b,c)=> a-b-c,
    C: (a,b,c)=> a+b-c,
    D: {
        E:(a,b,c) => a+b+c
    }
}
const compute = (obj, a,b,c) => {
    
    // console.log("outside", Object.entries(obj).length);
    
    // for(let i=0; i<obj.length; i++){
    //     console.log("inside loop");
        
    //     result.push(obj[i](a,b,c));
    // }
    // for(let key in obj){
    //     console.log("inside loop");
    //     console.log(key);
    //     if (typeof obj[key] === 'function') {
    //         result[key] = obj[key](a,b,c);
    //     }
    //     // else if (typeof obj[key] === 'object' ) {
    //     //     compute(a, b, c); 
    //     // }
        
    // }
    for(let key in obj){
        if(typeof obj[key] === 'function'){
            result[key] = obj[key](a,b,c);
        }else if(typeof obj[key] === 'object'){
            compute(obj[key], a,b,c);
        }
    }
    return result;
}

console.log(compute(obj, 1,1,1));
