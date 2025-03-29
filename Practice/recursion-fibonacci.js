const calcFib = (num) => {
    if(num === 1){
        return num;
    }
    return num += calcFib(num - 1);
}

console.log(calcFib(3));
