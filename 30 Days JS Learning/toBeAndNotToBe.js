const expect = function (val) {
    return {
        toBe: (val1) => {
            if (val1 === val) return true;
            else return("Not Equal");
        },
        notToBe: (val1) => {
            if (val1 !== val) return true;
            else return("Equal");
        }
    }
}

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
