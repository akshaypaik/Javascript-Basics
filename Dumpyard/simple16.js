const ranArr = Array.from({ length: 20}, (_, i) => i );
console.log(ranArr);

const ranArr2 = [...Array(20).keys()].map((item, index) => index + 1);
console.log(ranArr2);

const pow = (x,n) => {
    if(n === 1){
        return x;
    }
    return x * pow(x, n - 1);
}
console.log(pow(2,3));
